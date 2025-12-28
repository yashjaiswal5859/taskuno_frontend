# TaskUno - Project Management Platform

A modern, full-featured project management and task tracking platform built with React and TypeScript. TaskUno helps teams organize tasks, manage projects, and collaborate effectively with an intuitive Kanban board interface.

🌐 **Live Demo**: [https://task-uno.vercel.app/](https://task-uno.vercel.app/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features Explained](#key-features-explained)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [Author](#author)

---

## 🎯 About

TaskUno is a comprehensive project management platform designed to help teams streamline their workflow. It provides visual task management through Kanban boards, project organization, team collaboration features, and role-based access control. Built with modern web technologies, TaskUno offers a smooth, responsive user experience across all devices.

### What TaskUno Does:

- **Task Management**: Create, assign, and track tasks with status updates
- **Project Organization**: Organize tasks into projects with detailed project views
- **Kanban Board**: Visual drag-and-drop interface for task management
- **Team Collaboration**: Invite team members, assign tasks, and track progress
- **Role-Based Access**: Different permissions for Product Owners, Developers, and Admins
- **Scheduler View**: Calendar-based view for task scheduling
- **Organization Management**: Manage teams and organizational structure

---

## ✨ Features

### Core Features

- ✅ **User Authentication & Authorization**
  - Secure login and registration
  - JWT-based authentication
  - Role-based access control (Product Owner, Developer, Admin)
  - Protected routes

- ✅ **Task Management**
  - Create, update, and delete tasks
  - Assign tasks to team members
  - Set due dates and priorities
  - Task status tracking (To Do, In Progress, In Review, Done, Blocked)
  - Detailed task view with full information

- ✅ **Project Management**
  - Create and manage multiple projects
  - Project detail pages
  - Link tasks to projects
  - Project-based task filtering

- ✅ **Kanban Board**
  - Drag-and-drop task management
  - Visual workflow representation
  - Status-based columns
  - Real-time updates

- ✅ **Scheduler View**
  - Calendar-based task visualization
  - Monthly view with task distribution
  - Easy navigation between months

- ✅ **Team Collaboration**
  - Invite users to organization
  - View organization structure
  - Developer and Product Owner management
  - User profile management

- ✅ **Admin Features**
  - View all tasks across organization
  - Manage all users
  - Administrative dashboard

### UI/UX Features

- 🎨 **Modern Design**: Beautiful gradient backgrounds and smooth animations
- 📱 **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Optimized with React best practices
- 🎭 **Animations**: Smooth page transitions using Framer Motion
- 🔔 **Notifications**: Toast notifications for user actions
- 🌙 **Dark Theme**: Eye-friendly dark color scheme

---

## 🛠 Tech Stack

### Frontend Framework
- **React 18.2.0** - UI library
- **TypeScript 4.9.5** - Type safety
- **React Router DOM 6.6.1** - Client-side routing

### State Management
- **Redux Toolkit 1.9.1** - State management
- **React Redux 8.0.5** - React bindings for Redux

### UI Libraries & Styling
- **Tailwind CSS 3.2.4** - Utility-first CSS framework
- **Framer Motion 10.16.4** - Animation library
- **React Beautiful DnD 13.1.1** - Drag and drop for Kanban
- **React Awesome Slider 4.1.0** - Image carousel

### Forms & Validation
- **React Hook Form 7.41.1** - Form handling
- **React Draft WYSIWYG 1.15.0** - Rich text editor

### HTTP Client
- **Axios 1.2.1** - API requests with interceptors

### Utilities
- **Day.js 1.11.7** - Date manipulation
- **React Toastify 9.1.1** - Toast notifications
- **React Scroll 1.9.3** - Smooth scrolling

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see [TaskUno Backend](https://task-uno.duckdns.org))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/taskuno_frontend.git
   cd taskuno_frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_API_URL=http://localhost:8000
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
taskuno_frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimatedRoutes.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Loader.tsx
│   │   ├── PrivateRoute.tsx
│   │   ├── ProfileDropdown.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SearchableDropdown.tsx
│   │   └── WorkflowChart.tsx
│   ├── features/            # Redux slices and services
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── organization/
│   │   ├── projects/
│   │   └── tasks/
│   ├── hooks/              # Custom React hooks
│   │   ├── redux.ts
│   │   └── useAuthStatus.ts
│   ├── pages/              # Page components
│   │   ├── admin/
│   │   │   ├── AllTasks.tsx
│   │   │   └── AllUsers.tsx
│   │   ├── AddProject.tsx
│   │   ├── AddTask.tsx
│   │   ├── Home.tsx
│   │   ├── InviteUser.tsx
│   │   ├── Kanban.tsx
│   │   ├── Login.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── Projects.tsx
│   │   ├── Register.tsx
│   │   ├── Scheduler.tsx
│   │   ├── TaskDetail.tsx
│   │   ├── ViewOrganization.tsx
│   │   └── ViewProfile.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   ├── axiosInterceptor.ts
│   │   ├── roleCheck.ts
│   │   └── storage.ts
│   ├── App.tsx             # Main app component
│   ├── index.tsx           # Entry point
│   └── store.ts            # Redux store configuration
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 🎮 Key Features Explained

### 1. Authentication Flow
- Users can register as Product Owners or Admins
- Developers must be invited by Product Owners
- JWT tokens stored securely in localStorage
- Automatic token refresh mechanism
- Protected routes redirect to login if not authenticated

### 2. Kanban Board
- Drag-and-drop tasks between status columns
- Visual representation of workflow
- Real-time status updates
- Task filtering and search
- Detailed task view on click

### 3. Project Management
- Create projects with title and description
- Link tasks to specific projects
- View all projects in a grid layout
- Project detail pages with associated tasks
- Project-based task filtering

### 4. Role-Based Access
- **Product Owner**: Can create projects, tasks, and invite users
- **Developer**: Can view and update assigned tasks
- **Admin**: Full access including admin dashboard

### 5. Team Collaboration
- Invite users via email
- View organization structure
- See all developers and product owners
- Assign tasks to team members

---

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:8000
```

For production, update `REACT_APP_API_URL` to your production API URL.

---

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
**Note: this is a one-way operation.** Once you eject, you can't go back!

---

## 🎨 Design Highlights

- **Color Scheme**: Dark theme with purple and blue gradients
- **Typography**: Clean, modern fonts with proper hierarchy
- **Animations**: Smooth page transitions and hover effects
- **Responsive**: Mobile-first design approach
- **Accessibility**: Semantic HTML and ARIA labels

---

## 🔐 Security Features

- JWT token-based authentication
- Secure token storage in localStorage
- Automatic token refresh
- Protected routes with authentication checks
- Role-based access control
- CORS configuration
- Input validation and sanitization

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is private and proprietary.

---

## 👨‍💻 Author

**Yash Jaiswal**

- GitHub: [@yashjaiswal5859](https://github.com/yashjaiswal5859)
- LinkedIn: [Yash Jaiswal](https://www.linkedin.com/in/yash-jaiswal-49a26a178/)
- Email: yashjaiswal88542@gmail.com
- Instagram: [@yashjaiswal5859](https://www.instagram.com/yashjaiswal5859)

---

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons and UI inspiration from various open-source projects

---

## 📞 Support

For support, email yashjaiswal88542@gmail.com or open an issue in the repository.

---

**Made with ❤️ by Yash Jaiswal**
