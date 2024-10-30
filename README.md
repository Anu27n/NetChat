<a name="readme-top"></a>

<div align="center">
<img width="200px" src="https://mir-s3-cdn-cf.behance.net/projects/404/4fdd90127219173.Y3JvcCwxOTk5LDE1NjQsMCwyNjI.jpg" alt="NetChat Logo">
</div>

<h1 align="center"> NetChat <br/> <span style="font-size:10px;">A Social Chatting Service</span></h1>

<div align="center">

![Badge](https://img.shields.io/badge/API-Stream-green)
![Badge](https://img.shields.io/badge/Analytics-Google_Analytics-orange)
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

]
<br />

<h3 align="center">✨ Welcome to NetChat ✨ </h3> <hr>



## Overview🔨
NetChat is a social chatting service designed to facilitate seamless communication among users. With features that combine the best of modern messaging apps, it allows individuals to connect, share, and engage in real-time conversations, ensuring that no message goes unnoticed.

## Problem and Solution

### The Problem🆘
In today's fast-paced digital world, efficient communication is crucial. However, many existing chat applications suffer from issues such as:

1. **Limited Functionality:** Traditional messaging apps often lack advanced features for sharing media and engaging with others.
2. **Poor User Experience:** Many platforms can be cumbersome, leading to frustration in communication.
3. **Fragmented Communication:** Users frequently switch between multiple apps to connect with friends, leading to disorganization.

### Solution
NetChat addresses these challenges by providing:

1. **Robust Infrastructure:** Ensures reliable messaging, even in low connectivity areas.
2. **Feature-Rich Experience:** Offers direct and group chats, multimedia sharing, and threaded conversations.
3. **User Engagement:** Encourages interaction through notifications, mentions, and integrations with popular services like Giphy and YouTube.
4. **Unified Communication:** Combines multiple messaging functionalities into one streamlined platform.
5. **Mobile Accessibility:** Users can access their chats on-the-go, ensuring they never miss an important message.
6. **Intuitive UI:** Designed for easy navigation, making it suitable for all users, regardless of technical skill.



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

# Installation Instructions

## Frontend Setup

1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Start the development server**:
    ```bash
    npm start
    ```

   You can also refer to the client's README.md file for more details.

## Backend Setup

1. **Navigate to the server directory**:
    ```bash
    cd ../server
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   - Open the `client/src/App.js` and `client/src/Components/Auth.js` files and replace the placeholders with your actual API keys and tokens.
   - Create a `.env` file in the root directory of the server folder and add the following variables:
    ```plaintext
    STREAM_APP_ID=your_stream_app_id
    STREAM_API_SECRET=your_stream_api_secret
    STREAM_API_KEY=your_stream_api_key
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_MESSAGING_SERVICE_SID=your_twilio_messaging_service_sid
    ```
   Replace `your_*` with your actual API keys and tokens.

4. **Start the backend server**:
    ```bash
    npm start
    npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing 🤝

We welcome contributions to improve NetChat! Here's how you can contribute:

1. **Fork the repository.**
2. **Create a new branch for your feature or bug fix**:
    ```bash
    git checkout -b feature/AmazingFeature
    ```

3. **Commit your changes and push to the branch**:
    ```bash
    git commit -m 'Add some AmazingFeature'
    git push origin feature/AmazingFeature
    ```

4. **Open a Pull Request** with a detailed description of your changes.
5. Voila! ❗ You have made a PR to this awesome project 💥. Wait for your submission to be accepted and your PR to be merged.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

A significant portion of the code in this repository came from [GetStream](https://getstream.io/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<hr>

<div align="center">
    Made with ❤️
</div>
