<a name="readme-top"></a>

<div align="center">
<img width="200px" src="client/public/favicon_io/android-chrome-192x192.png" alt="NetChat Logo">
</div>

<h1 align="center"> NetChat <br/> <span style="font-size:10px;">A Social Chatting Service</span></h1>

<div align="center">

![Badge](https://img.shields.io/badge/API-Stream-green)
![Badge](https://img.shields.io/badge/Analytics-Google_Analytics-orange)
![Badge](https://img.shields.io/badge/CSS-BEM-lightgrey)
![Badge](https://img.shields.io/badge/SMS-Twilio-red)
![Badge](https://img.shields.io/badge/LICENSE-MIT-purple)
![Badge](https://img.shields.io/badge/Version-1.0-yellow)

</div>

## Tech Stack and tools:
<span>
<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> 
<img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img src="https://img.shields.io/badge/express%20-%23E34F26.svg?&style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> 
<img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> 
<img src="https://img.shields.io/badge/render%20-%2300A8E8.svg?&style=for-the-badge&logo=render&logoColor=white"/>
<img src="https://img.shields.io/badge/stream%20-%23FF0000.svg?&style=for-the-badge&logo=stream&logoColor=white"/> 
<img src="https://img.shields.io/badge/twilio%20-%23F22F46.svg?&style=for-the-badge&logo=twilio&logoColor=white"/>
<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/netlify%20-%2300C7B7.svg?&style=for-the-badge&logo=netlify&logoColor=white"/>
<img src="https://img.shields.io/badge/git%20-%23121011.svg?&style=for-the-badge&logo=git&logoColor=green"/> 
<img src="https://img.shields.io/badge/VS%20Code-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
</span>
- **Frontend:** HTML, CSS, JavaScript, React.
- **Backend:** Node.js, Express.
- **Real-time Messaging:** Stream API.
- **SMS Notifications:** Twilio.
- **Version Control:** Git and GitHub.
- **Hosting:** Netlify (frontend) and Render (backend).
- **Code Editor:** VS Code.
- **Analytics:** Google Analytics.
- **CSS Methodology:** BEM (Block Element Modifier).

<br />

<h3 align="center">✨ Welcome to NetChat ✨ </h3> <hr>

# Table of Contents
<details>
  <summary>Click to expand</summary>
  
  - [Overview](#overview)
  - [Problem and Solution](#problem-and-solution)
  - [Key Features](#key-features)
  - [Advanced Concepts Implemented](#advanced-concepts-implemented)
  - [Dependencies Used](#dependencies-used)
  - [API & Services](#api--services)
  - [Usage Notes](#usage-notes)
  - [Security and User Management](#security-and-user-management)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)
  
</details> 

## Overview🔨
NetChat is a social chatting service designed to facilitate seamless communication among users. With features that combine the best of modern messaging apps, it allows individuals to connect, share, and engage in real-time conversations, ensuring that no message goes unnoticed.

## Problem and Solution

### The Problem🆘
In today's fast-paced digital world, efficient communication is crucial. However, many existing chat applications suffer from issues such as:

1. **Limited Functionality:** Traditional messaging apps often lack advanced features for sharing media and engaging with others.
2. **Poor User Experience:** Many platforms can be cumbersome, leading to frustration in communication.
3. **Fragmented Communication:** Users frequently switch between multiple apps to connect with friends, leading to disorganization.

### Our Solution
NetChat addresses these challenges by providing:

1. **Robust Infrastructure:** Ensures reliable messaging, even in low connectivity areas.
2. **Feature-Rich Experience:** Offers direct and group chats, multimedia sharing, and threaded conversations.
3. **User Engagement:** Encourages interaction through notifications, mentions, and integrations with popular services like Giphy and YouTube.
4. **Unified Communication:** Combines multiple messaging functionalities into one streamlined platform.
5. **Mobile Accessibility:** Users can access their chats on-the-go, ensuring they never miss an important message.
6. **Intuitive UI:** Designed for easy navigation, making it suitable for all users, regardless of technical skill.

<div align="center">
<img src="c1.JPG" alt="NetChat dashboard">
</div>

!["Chat interface"](gif1.gif) 
!["Chat interface with mentions"](gif2.gif)

## Key Features:
- Secure user authentication and management.
- Direct messaging and group chat functionalities.
- Multimedia support including GIFs, images, and videos.
- Real-time notifications for messages and updates.
- Message editing and deletion capabilities.
- Threaded replies for better conversation management.
- Giphy integration for fun and engaging chats.
- Search functionality for easy navigation.
- Fully responsive design for all devices.
- Twilio integration for SMS notifications.
- Upload local files directly within the chat.
- Mentions to tag specific users in conversations.
- Webhooks for enhanced notifications and integrations.

## Advanced Concepts Implemented🧠
- Efficient folder and file structure.
- React Context API for state management.
- Integration with Stream API for scalable chat infrastructure.
- Custom hooks for reusable logic and more.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Dependencies used🖥️
- [x] React (for building user interfaces)
- [x] Stream Chat React (for chat functionality)
- [x] Universal Cookie (for cookie management)
- [x] Axios (for API calls)
- [x] Stream Chat (for chat infrastructure)
- [x] Express (web application framework)
- [x] Twilio (for SMS notifications)
- [x] bcrypt (for password hashing)
- [x] cors (for enabling CORS)
- [x] dotenv (for environment variable management)
- [x] crypto (for cryptographic functionality)
- [x] nodemon (for auto-restarting the server during development)

### API & Services
- [x] Stream API (for real-time messaging)
- [x] Twilio API (for SMS services)
- [x] Google Analytics (for user interaction tracking)

## Usage Notes
1. If you encounter any errors during sign-in or sign-up, please refresh the page and try again.
2. When setting up your profile, you need to provide a URL for your avatar (profile picture).
3. To use GIFs in your messages, type `/giphy [keyword]` (e.g., `/giphy hello` to find a "hello" GIF).
4. To mention a specific user in a chat, type `@username`.
5. You need to have an account with Twilio for SMS messaging.
6. The project code includes various comments that clarify functionality and increase readability. These comments can be useful for understanding the code's structure and logic.
7. For more information, access the full project demo video on Google Drive [here](https://drive.google.com/drive/folders/1t4ZaA0Z9sn59LwjCKvfuHerGs8eDd8oa?usp=drive_link).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Security and User Management
We've implemented strict rules for managing users across all types of chats in NetChat to ensure security and proper access control:

* **Automatic Memberships:**
   * Users cannot leave or be removed from chats they were automatically added to.

* **Private Conversations:**
   * Members cannot leave or be removed from their private conversations (DMs).

* **Administrative Control:**
   * Administrators have the highest level of control and can manage most user access.

* **Department-Specific:**
   * Members can only access chats that are directly relevant to their specific department.

* **User Engagement:**
   * Users receive automatic notifications for updates related to their chats.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation🛠️
### For Local Development:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/NetChat.git
   cd NetChat
