# Vidhyadhara Foundation — Website

Full-stack website for Vidhyadhara Foundation, a non-profit educational charity in Nalgonda, Telangana, India.

---

## Project Structure

```
Vidhyadhara-deploy/
├── frontend/          # Next.js 14 (App Router)
├── backend/           # Node.js + Express API
├── docker-compose.yml
├── docker-compose.dev.yml
├── .gitignore
└── README.md
```

---

## Tech Stack

- **Frontend**: Next.js 14, React 18, plain inline styles
- **Backend**: Node.js, Express.js (port 4000)
- **Database**: MongoDB with Mongoose (db: `foundations`)
- **Security**: Helmet, CORS whitelist, rate limiting, input sanitisation
- **Containerisation**: Docker + Docker Compose

---

## Local Development (Without Docker)

### Prerequisites
- Node.js 18+
- MongoDB running locally on port 27017

### 1. Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env if needed
npm install
npm run dev   # starts with nodemon on port 4000
```

### 2. Frontend Setup

```bash
cd frontend
cp .env.local.example .env.local
# Edit NEXT_PUBLIC_API_URL if backend is on a different port
npm install
npm run dev   # starts on port 3000
```

Visit: http://localhost:3000

---

## Local Development (With Docker)

```bash
# Full stack with hot reload
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build

# Production build locally
docker-compose up --build
```

Visit: http://localhost:3000  
API health: http://localhost:4000/health

---

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description | Example |
|---|---|---|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/vidhyadhara` |
| `PORT` | Server port | `4000` |
| `FRONTEND_URL` | Allowed CORS origin(s), comma-separated | `http://localhost:3000` |
| `NODE_ENV` | Environment | `development` or `production` |

### Frontend (`frontend/.env.local`)

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:4000` |

---

## Production Deployment

### 1. MongoDB Atlas

1. Create a free cluster at https://cloud.mongodb.com
2. Create a database user (username + password)
3. Whitelist your server IP (or 0.0.0.0/0 for all)
4. Copy the connection string: `mongodb+srv://<user>:<pass>@cluster.mongodb.net/foundations`

### 2. Backend → Render

1. Push code to GitHub
2. Go to https://render.com → New Web Service
3. Connect your GitHub repo, set root to `backend/`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Set environment variables:
   - `MONGODB_URI` → your Atlas URI
   - `FRONTEND_URL` → your Vercel frontend URL
   - `NODE_ENV` → `production`
   - `PORT` → `4000`
7. Health check path: `/health`

Alternatively, use the included `render.yaml` for one-click setup.

### 3. Frontend → Vercel

1. Push code to GitHub
2. Go to https://vercel.com → New Project
3. Import frontend folder
4. Set environment variable:
   - `NEXT_PUBLIC_API_URL` → your Render backend URL (e.g. `https://vidhyadhara-backend.onrender.com`)
5. Deploy

---

## Adding PDF Files

### Expense Reports (Programs page)

Place PDF files in `frontend/public/expenses/`:

```
frontend/public/expenses/
├── summer-camp-2024.pdf
├── dasara-camp-2024.pdf
├── summer-camp-2025.pdf
├── dasara-camp-2025.pdf
└── winter-camp-2025.pdf
```

### Notice PDFs (Home page)

Place PDF files in `frontend/public/notices/`:

```
frontend/public/notices/
└── summer-camp-2026.pdf
```

> If a PDF file does not exist yet, the download button will still render — clicking it simply won't download anything. This is expected.

---

## Adding Images

### Logo
Place at: `frontend/public/logo.jpeg`

### Gallery Images
Place in: `frontend/public/gallery/`

Expected filenames: `image1.jpeg`, `image2.jpeg`, ..., `image13.jpeg`, `gallary1.jpeg`, `group1.jpeg`, `maditation.jpeg`

### Team Photos
Place in: `frontend/public/team/`

Expected filenames: `founder1.jpeg`, `founder2.jpeg`, `founder3.jpeg`, `santu.jpeg`, `sima.jpeg`, `thanuja.jpeg`, `maheshwari.jpeg`

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Health check with DB status |
| `POST` | `/api/register-student` | Submit student registration |
| `GET` | `/api/students` | List all students (admin) |
| `POST` | `/api/register-volunteer` | Submit volunteer application |
| `GET` | `/api/volunteers` | List all volunteers (admin) |

---

## Security Features

- Helmet.js security headers on all responses
- CORS whitelist — never wildcard `*` in production
- Rate limiting: 100 req/15 min globally, 10 req/hour on registration routes
- Input sanitisation — all fields trimmed before DB save
- No stack traces in production error responses
- MongoDB injection prevention via Mongoose schema validation
- Request size limit: 1MB

---

## Contact

**Vidhyadhara Foundation**  
Haliya, Nalgonda, Telangana — 508377  
Email: vidhyadharafoundation@gmail.com  
Phone: +91 7799355803
