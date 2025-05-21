# 🌐 Company Website – Full Stack Microservices Application

This project is a **Java Full Stack Company Website** built using:
- **Backend**: Spring Boot Microservices (auth-service, content-service, contact-service)
- **Frontend**: React.js
- **Service Discovery**: Eureka
- **API Gateway**: Spring Cloud Gateway
- **Database**: MySQL
- **Deployment**: Docker Compose (optional)
- **Authentication**: JWT-based login system

---

## ✅ Completed Features

### 🔐 Authentication (auth-service)
- Signup & Login with JWT token generation
- User info fetch endpoint
- Secure dashboard route access
- Token stored in localStorage

### 📦 Microservices Architecture
- `auth-service`: Handles authentication and user identity
- `content-service`: Manages About, Services, Home content
- `contact-service`: Manages contact form submission and email logic
- `eureka-server`: Registers all services
- `api-gateway`: Routes all external API requests to appropriate services

### 🧩 Frontend (React)
- Built with functional components and Tailwind CSS
- Pages:
  - Home
  - About
  - Services
  - Contact Form (submits to `contact-service`)
  - Signup / Login (connects with `auth-service`)
  - Dashboard (protected route with JWT validation)
- Conditional navbar menu based on login state
- State managed using `AuthContext` and `localStorage`
- Navigation handled with React Router

---

## 🔧 Project Structure (Microservices)

```bash
company-website/
├── api-gateway/
├── auth-service/
├── contact-service/
├── content-service/
├── eureka-server/
└── frontend/          # React App

