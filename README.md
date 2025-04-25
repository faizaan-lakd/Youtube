# MyTube – A YouTube Clone with React

A feature-rich YouTube clone built using React, Redux, and Tailwind CSS. It replicates core features of YouTube using real APIs and modern React architecture.

🔗 **Live Demo:** [MyTube Live](https://youtube-woad-nine.vercel.app/)

---

## Features

- **Video Feed (Homepage):**

  - Displays trending videos via YouTube Data API
  - Responsive cards with thumbnails, titles, and metadata

- **Live Search Suggestions & Caching:**

  - Debounced API calls for real-time search suggestions
  - Redux-powered caching to avoid repeated API requests and improve search responsiveness

- **Watch Page:**

  - Embedded YouTube video player
  - Displays related videos and full metadata
  - Video-specific route using React Router

- **Live Chat (Simulated):**

  - Implemented live chat feature allowing users to view and send messages in real-time
  - Periodic updates via simulated API polling
  - Auto-scroll of chat messages

- **Comments Section:**

  - Nested comment rendering (threaded replies)
  - Recursively displays deeply nested comment trees

- **Routing with React Router DOM:**
  - Multiple routes for home, watch, and search pages
  - Deep linking and browser navigation support

---

## ⚙️ Tech Stack

- **React 19** (Functional Components + Hooks)
- **Redux Toolkit**
- **React Router DOM v7**
- **Tailwind CSS**
- **YouTube Data API**
- **Moment.js** (for relative timestamps)

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/faizaan-lakd/Youtube.git

# Install dependencies
npm install

# Start development server
npm start
```
