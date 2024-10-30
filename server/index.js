const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.js');

const app = express();
const PORT = process.env.PORT || 5000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const twilioclient = require('twilio')(accountSid, authToken);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    const { message, user: sender, type, channelUrl } = req.body;

    if (type === 'message.new') {
        client.messages
            .create({
                body: `New message from ${sender}: ${message}`,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: process.env.MY_PHONE_NUMBER
            })
            .then(() => {
                res.status(200).send('Message sent successfully');
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Failed to send message');
            });
    } else if (type === 'message.updated') {
        client.messages
            .create({
                body: `Updated message from ${sender}: ${message}`,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: process.env.MY_PHONE_NUMBER
            })
            .then(() => {
                res.status(200).send('Message sent successfully');
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Failed to send message');
            });
    } else {
        res.status(200).send('Not a new message');
    }
}
);

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

