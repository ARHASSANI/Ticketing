# Ticketing System

A modern, full-stack ticketing management system built with FastAPI and Vue 3 with Quasar Framework. This application allows users to create, manage, and track support tickets with role-based access control.

## ✨ Features

- **User Authentication**: Secure login and registration with JWT tokens
- **Ticket Management**: Create, read, update, and delete support tickets
- **Status Tracking**: Track ticket progress (Open, In Progress, Resolved, Closed)
- **Priority Levels**: Assign priority levels (Low, Medium, High, Critical) to tickets
- **User Roles**: Admin, Support, and User roles with different permissions
- **Dashboard**: View ticket statistics and recent activity
- **Comments**: Add comments and updates to tickets
- **Timeline**: Visual timeline of ticket changes
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Analytics**: Monitor ticket metrics and user statistics

## 🛠️ Tech Stack

### Backend

- **Framework**: FastAPI
- **Database**: SQLite (configurable to PostgreSQL)
- **ORM**: SQLAlchemy
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Pydantic

### Frontend

- **Framework**: Vue 3
- **UI Library**: Quasar Framework
- **State Management**: Pinia
- **HTTP Client**: Axios
- **Router**: Vue Router

## 📋 Prerequisites

- Python 3.8+
- Node.js 14+
- npm or yarn

## 🚀 Installation

### Backend Setup

1. Clone the repository:

```bash
cd ticketing-system/backend
```

2. Create a virtual environment:

```bash
python -m venv venv
```

3. Activate the virtual environment:
   - **Windows**:
     ```bash
     venv\Scripts\activate
     ```
   - **macOS/Linux**:
     ```bash
     source venv/bin/activate
     ```

4. Install dependencies:

```bash
pip install -r requirements.txt
```

5. Initialize the database:

```bash
python seed.py
```

6. Start the development server:

```bash
python main.py
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd ticketing-system/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📖 API Documentation

Once the backend is running, visit `http://localhost:8000/docs` for interactive API documentation (Swagger UI).

### Available Endpoints

#### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh-token` - Refresh access token

#### Users

- `GET /api/users/` - Get all users
- `GET /api/users/{user_id}` - Get specific user
- `POST /api/users/` - Create new user
- `PUT /api/users/{user_id}` - Update user
- `DELETE /api/users/{user_id}` - Delete user

#### Tickets

- `GET /api/tickets/` - Get all tickets
- `GET /api/tickets/{ticket_id}` - Get specific ticket
- `POST /api/tickets/` - Create new ticket
- `PUT /api/tickets/{ticket_id}` - Update ticket
- `DELETE /api/tickets/{ticket_id}` - Delete ticket
- `POST /api/tickets/{ticket_id}/comments` - Add comment to ticket

#### Roles

- `GET /api/roles/` - Get all roles
- `GET /api/roles/{role_id}` - Get specific role
- `POST /api/roles/` - Create new role
- `PUT /api/roles/{role_id}` - Update role
- `DELETE /api/roles/{role_id}` - Delete role

#### Analytics

- `GET /api/analytics/dashboard` - Get dashboard statistics
- `GET /api/analytics/tickets/by-status` - Get tickets grouped by status
- `GET /api/analytics/tickets/by-priority` - Get tickets grouped by priority
- `GET /api/analytics/user/{user_id}/statistics` - Get user statistics

## 📁 Project Structure

```
ticketing-system/
├── backend/
│   ├── main.py                 # FastAPI application entry point
│   ├── config.py               # Configuration settings
│   ├── database.py             # Database connection and session
│   ├── requirements.txt         # Python dependencies
│   ├── seed.py                 # Database seeding script
│   ├── models/                 # SQLAlchemy models
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── ticket.py
│   │   └── role.py
│   ├── schemas/                # Pydantic schemas for validation
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── ticket.py
│   │   └── role.py
│   ├── routers/                # API route handlers
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── users.py
│   │   ├── tickets.py
│   │   ├── roles.py
│   │   └── analytics.py
│   └── middleware/             # Custom middleware
│       └── auth.py
│
└── frontend/
    ├── package.json
    ├── quasar.config.js        # Quasar configuration
    ├── src/
    │   ├── App.vue             # Root component
    │   ├── boot/               # Boot files
    │   │   └── axios.js
    │   ├── stores/             # Pinia stores
    │   │   ├── auth.js
    │   │   └── tickets.js
    │   ├── router/             # Vue Router configuration
    │   │   ├── index.js
    │   │   └── routes.js
    │   ├── layouts/            # Layout components
    │   │   ├── MainLayout.vue
    │   │   └── AuthLayout.vue
    │   ├── pages/              # Page components
    │   │   ├── LoginPage.vue
    │   │   ├── RegisterPage.vue
    │   │   ├── DashboardPage.vue
    │   │   ├── TicketsPage.vue
    │   │   ├── TicketDetailPage.vue
    │   │   ├── CreateTicketPage.vue
    │   │   ├── UsersPage.vue
    │   │   ├── RolesPage.vue
    │   │   ├── ReportsPage.vue
    │   │   └── ProfilePage.vue
    │   └── components/         # Reusable components
    │       ├── dashboard/
    │       │   ├── StatsCards.vue
    │       │   ├── TicketChart.vue
    │       │   └── RecentTickets.vue
    │       ├── tickets/
    │       │   ├── TicketList.vue
    │       │   ├── TicketForm.vue
    │       │   ├── TicketTimeline.vue
    │       │   ├── TicketComments.vue
    │       │   └── TicketFilters.vue
    │       ├── users/
    │       │   ├── UserList.vue
    │       │   └── UserForm.vue
    │       └── common/
    │           └── ConfirmDialog.vue
```

## 🔒 Environment Variables

Create a `.env` file in the `backend` directory:

```env
DATABASE_URL=sqlite:///./ticketing_system.db
SECRET_KEY=your-secret-key-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8080
APP_NAME=Ticketing System
APP_VERSION=1.0.0
DEBUG=True
```

## 🧪 Testing

### Backend Tests

```bash
cd backend
pytest
```

### Frontend Tests

```bash
cd frontend
npm run test
```

## 📝 Available Scripts

### Backend

- `python main.py` - Start development server
- `python seed.py` - Seed database with initial data

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🚢 Deployment

### Backend Deployment

1. Update `config.py` with production settings
2. Set environment variables on your production server
3. Use Gunicorn or Uvicorn for production:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```

### Frontend Deployment

1. Build the application:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to your hosting service (Netlify, Vercel, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- FastAPI documentation
- Quasar Framework
- Vue.js community

## 📞 Support

For support, email support@ticketingsystem.com or open an issue on GitHub.

## 🗺️ Roadmap

- [ ] Real-time notifications (WebSocket)
- [ ] Email notifications
- [ ] File attachments
- [ ] Advanced search and filtering
- [ ] Custom fields
- [ ] SLA management
- [ ] Integration with external services
- [ ] Mobile app (React Native)

## 🔄 Version History

### v1.0.0 (Current)

- Initial release
- Basic ticket management
- User authentication
- Role-based access control
- Dashboard with statistics
