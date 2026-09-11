# Student Community — Full Stack Community & Collaboration Platform

> A comprehensive MERN-stack community platform bridging students, mentors, and developers with real-time communication, resource sharing, and interactive discussions.

---

## Overview

**Student Community** is a full-featured web application engineered to solve the fragmented communication and resource-sharing challenges faced by university students and developer cohorts. It provides an intuitive social feed, real-time peer-to-peer and group messaging, automated notification triggers, and categorized discussion channels.

---

## Key Features

- **Dynamic Community Feed:** Create, like, comment, and bookmark posts with rich text and multimedia attachments uploaded via Cloudinary.
- **Real-Time Direct & Group Chat:** Integrated WebSocket communication powered by Socket.io with instant typing indicators, delivery receipts, and online presence tracking.
- **Granular Access & Authentication:** Secure JWT-based authentication with bcrypt password hashing, session revocation, and role-based permissions (Member, Moderator, Admin).
- **Resource Repository:** Curated study materials, coding interview problem sets, and project roadmaps categorized by domain.
- **Responsive Modern Interface:** Pixel-perfect user experience optimized for desktop workstations, tablets, and smartphones.

---

## Tech Stack & Architecture

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | React.js, React Router, Context API, CSS3 Modules, Vite |
| **Backend** | Node.js, Express.js, RESTful API Architecture |
| **Database** | MongoDB, Mongoose ODM |
| **Real-time Engine** | Socket.io WebSockets |
| **Media Storage** | Cloudinary Media CDN API |
| **Security** | JWT (JSON Web Tokens), Bcrypt.js, CORS, Helmet |

---

## System Workflow

```
[ Client (React.js) ]
       │
       ├──── REST API (HTTP/JSON) ─────► [ Express.js Backend ] ─────► [ MongoDB ]
       │                                        │
       │                                        ├──── Cloudinary (Image CDN)
       │                                        │
       └──── WebSockets (Socket.io) ────────────┘
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/abvinnovator/Student-community.git

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Start development servers
npm run dev
```

---

## Repository & Links

- **GitHub Repository:** [github.com/abvinnovator/Student-community](https://github.com/abvinnovator/Student-community)
- **Author:** [Brahma Vamsi](https://github.com/abvinnovator)
