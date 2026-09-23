# 🚀 CollabEditor — Real-Time Collaborative Code Editor

<p align="center">
  <b>Write, run, and discuss code together — in real time, with zero conflicts.</b>
</p>

---

## 📖 About

**CollabEditor** is a real-time collaborative code editor that allows multiple developers to join a shared room and **write, run, and discuss code simultaneously**.

It uses **Yjs CRDT** technology to synchronize code changes between multiple users while preventing conflicts and data loss during concurrent editing.

## ✨ Features

### 🔐 Authentication

- Email/password authentication with JWT and Bcrypt
- Google OAuth 2.0 using Passport.js
- Protected routes

### 🏠 Room Management

- Create rooms with unique invite codes
- Join rooms using shareable codes
- Owner and member permissions

### ⚡ Real-Time Collaboration

- Conflict-free collaborative editing using Yjs CRDT
- Live cursors showing collaborators' positions
- Real-time user presence
- Instant join and leave notifications

### 💻 Code Editor

- Monaco Editor with syntax highlighting
- Support for multiple programming languages
- Dark and light themes
- Multi-file support
- Create, rename, and delete files with real-time synchronization

### ▶️ Code Execution

- Execute code using JDoodle API
- Supports languages such as Python, JavaScript, C++, and Java
- Execution results shared with room members
- Error handling and output display

### 💬 Chat

- Real-time messaging
- Persistent chat history
- Optimistic message updates
- Unread message indicators

### 💾 Version History

- Manual and automatic code snapshots
- View previous versions
- Restore previous versions
- Restored changes synchronize with all collaborators

### 🔒 Security

- Zod input validation
- Rate limiting
- CORS protection
- Bcrypt password hashing

## 🛠️ Tech Stack

**Frontend:** React 19, Vite, Tailwind CSS, Zustand, React Router

**Backend:** Node.js, Express.js, Socket.io

**Real-Time Collaboration:** Yjs, y-websocket, y-monaco

**Database:** MongoDB Atlas, Mongoose

**Code Editor:** Monaco Editor

**Authentication:** JWT, Bcrypt, Passport.js, Google OAuth 2.0

**Code Execution:** JDoodle API

**Validation:** Zod

**Deployment:** Vercel, Render, MongoDB Atlas

## 🏗️ Architecture

CollabEditor follows a client-server architecture with separate real-time and REST communication layers.

The **React frontend** provides the collaborative editor, file explorer, chat interface, and room management features. Monaco Editor is integrated with Yjs to synchronize code changes between users.

The **Node.js and Express backend** handles authentication, room management, file operations, version history, and code execution. Socket.io manages real-time application events such as chat, presence, and room activities.

**Yjs WebSocket** handles collaborative document synchronization using CRDTs, ensuring that concurrent edits from multiple users are merged without conflicts.

**MongoDB Atlas** stores users, rooms, files, chat messages, and version snapshots, while the **JDoodle API** is used for remote code execution.

## 🎯 Key Technical Highlights

- **Yjs CRDT** for conflict-free real-time code collaboration
- **Monaco Editor** for a VS Code-like editing experience
- **Socket.io** for real-time chat, presence, and application events
- **Multi-file collaborative editing** with independent documents
- **Version history and restore** for recovering previous code states
- **JWT and Google OAuth** for secure authentication
- **JDoodle API** for multi-language code execution

## 🌐 Deployment

**Frontend:** Vercel

**Backend:** Render

**Database:** MongoDB Atlas

**Code Execution:** JDoodle API
