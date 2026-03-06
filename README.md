# Investment Analyzer

A full-stack investment analysis application that calculates investment returns, IRR, and XIRR for various investment schemes.

## Project Structure

```
Investment_analyzer/
├── backend/           # FastAPI Python backend
│   ├── app/          # Application code
│   │   ├── main.py   # FastAPI app initialization
│   │   ├── api/      # API routes
│   │   ├── models/   # Data models
│   │   ├── services/ # Business logic
│   │   └── utils/    # Helper functions
│   ├── requirements.txt
│   └── run.py        # Run script
└── frontend/         # React/Vite frontend
    ├── src/
    │   ├── components/  # React components
    │   ├── App.jsx      # Root component
    │   └── main.jsx    # Entry point
    ├── package.json
    └── vite.config.js
```

## Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn

## Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install Python dependencies:

```bash
python -m pip install -r requirements.txt
```

3. Run the development server:

```bash
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Or use the provided run script:

```bash
python run.py
```

The API will be available at `http://localhost:8000`

### API Endpoints

- `GET /` - Health check
- `POST /api/analyze-scheme` - Analyze an investment scheme

### Request Body Example

```json
{
  "premium_per_year": 10000,
  "premium_years": 10,
  "payout_every": 2,
  "payout_amount": 5000,
  "maturity_amount": 100000,
  "total_years": 20
}
```

## Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Lint Code

```bash
npm run lint
```

## Features

- **Investment Analysis**: Calculate returns on investment schemes
- **IRR Calculation**: Internal Rate of Return
- **XIRR Calculation**: Exact Internal Rate of Return
- **Responsive UI**: Works on desktop and mobile devices
- **Real-time API Integration**: Seamless communication between frontend and backend

## Technologies Used

### Backend

- FastAPI - Modern Python web framework
- Pydantic - Data validation
- numpy-financial - Financial calculations
- pyxirr - XIRR calculations
- Uvicorn - ASGI server

### Frontend

- React 19
- Vite - Build tool
- Tailwind CSS - Styling
- Tailwind CSS Vite plugin

## Development

### Environment Variables

The frontend is configured to proxy API requests to `http://localhost:8000/api` during development.

### Code Quality

The project includes:

- ESLint configuration for code linting
- Tailwind CSS for consistent styling
- React best practices and hooks

## Troubleshooting

### Backend won't start

- Ensure Python 3.8+ is installed
- Verify all dependencies are installed: `pip install -r requirements.txt`
- Check that port 8000 is not in use

### Frontend won't start

- Ensure Node.js 16+ is installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check that port 5173 is not in use

### API connection issues

- Ensure both frontend and backend servers are running
- Check CORS settings in `backend/app/main.py`
- Verify the API proxy in `frontend/vite.config.js`

## License

MIT
