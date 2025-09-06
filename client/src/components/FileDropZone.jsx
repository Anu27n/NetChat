import React, { useState, useRef, useCallback } from 'react';
import { useChannelActionContext } from 'stream-chat-react';
import './FileDropZone.css';

const FileDropZone = ({ children }) => {
    const [isDragActive, setIsDragActive] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const { sendMessage } = useChannelActionContext();
    const dragCounter = useRef(0);

    const handleDrop = useCallback(async (e) => {
        e.preventDefault();
        setIsDragActive(false);
        dragCounter.current = 0;

        const files = Array.from(e.dataTransfer.files);
        if (files.length === 0) return;

        setIsUploading(true);
        setUploadProgress(0);

        try {
            const attachments = [];
            
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                setUploadProgress(((i + 1) / files.length) * 100);
                
                // Create file attachment
                const attachment = {
                    type: getFileType(file),
                    file: file,
                    title: file.name,
                    file_size: file.size,
                    mime_type: file.type
                };

                // Add image preview for images
                if (file.type.startsWith('image/')) {
                    attachment.image_url = URL.createObjectURL(file);
                    attachment.thumb_url = attachment.image_url;
                }

                attachments.push(attachment);
            }

            // Send message with attachments
            await sendMessage({
                text: files.length === 1 ? `Shared ${files[0].name}` : `Shared ${files.length} files`,
                attachments: attachments
            });

            // Show success animation
            setTimeout(() => {
                setIsUploading(false);
                setUploadProgress(0);
            }, 500);

        } catch (error) {
            console.error('Upload error:', error);
            setIsUploading(false);
            setUploadProgress(0);
        }
    }, [sendMessage]);

    const getFileType = (file) => {
        if (file.type.startsWith('image/')) return 'image';
        if (file.type.startsWith('video/')) return 'video';
        if (file.type.startsWith('audio/')) return 'audio';
        if (file.type === 'application/pdf') return 'pdf';
        return 'file';
    };

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        dragCounter.current++;
        
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setIsDragActive(true);
        }
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        dragCounter.current--;
        
        if (dragCounter.current <= 0) {
            setIsDragActive(false);
            dragCounter.current = 0;
        }
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
    }, []);

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div
            className={`file-drop-zone ${isDragActive ? 'drag-active' : ''} ${isUploading ? 'uploading' : ''}`}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
        >
            {children}
            
            {isDragActive && (
                <div className="drop-overlay">
                    <div className="drop-content">
                        <div className="drop-icon">📁</div>
                        <div className="drop-text">Drop files here to share</div>
                        <div className="drop-hint">Images, documents, videos and more</div>
                    </div>
                </div>
            )}

            {isUploading && (
                <div className="upload-overlay">
                    <div className="upload-content">
                        <div className="upload-icon">☁️</div>
                        <div className="upload-text">Uploading files...</div>
                        <div className="upload-progress">
                            <div 
                                className="upload-progress-bar"
                                style={{ width: `${uploadProgress}%` }}
                            ></div>
                        </div>
                        <div className="upload-percentage">{Math.round(uploadProgress)}%</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileDropZone;
