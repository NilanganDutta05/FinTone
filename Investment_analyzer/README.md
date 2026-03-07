# FinTone 💰📊

**FinTone** is an enterprise-grade, full-stack financial analysis platform that helps users evaluate investment or insurance schemes by accurately calculating realistic financial returns and projecting cash flows.

With a beautifully crafted UI, it allows users to input investment details and immediately receive precise insights, making it easier to compare financial products and master your wealth.

---

# 🚀 Features

* 📈 **Investment Return Analysis**: Evaluate total investments, projected returns, and maximum profit scenarios.
* 💵 **Cash Flow Generation**: Accurate year-by-year cash projections based on premiums and payouts.
* 🧮 **Advanced Financial Metrics**: Automatically computes IRR (Internal Rate of Return), CAGR (Compound Annual Growth Rate), and XIRR (Exact Internal Rate of Return).
* ⚡ **Fast API Backend**: High-performance backend routing using **FastAPI**.
* 🎨 **Enterprise UI**: Stunning glassmorphism UI built with **React 19 + Vite + TailwindCSS v4**.
* 📱 **Responsive Design**: Flawless experience across desktop, tablet, and mobile viewing.

---

# 🏗️ Project Architecture

```text
FinTone
│
├── Investment_analyzer
│   ├── backend               # FastAPI Application
│   │   ├── app
│   │   │   ├── api           # API routes
│   │   │   ├── models        # Pydantic data models
│   │   │   ├── services      # Financial calculation engine & logic
│   │   │   └── utils         # Helper functions
│   │   │
│   │   ├── run.py            # Backend entry point
│   │   └── requirements.txt  # Python dependencies
│   │
│   └── frontend              # React + Vite Application
│       ├── src
│       │   ├── components    # React UI components (Calculator, Home, Navbar)
│       │   ├── App.jsx       # Root component
│       │   └── index.css     # Global styles
│       │
│       ├── package.json      # Node dependencies
│       └── vite.config.js    # Vite & Tailwind config
```

The application follows a **clean layered architecture**:

```text
Frontend UI → API Routes → Services Layer → Financial Engine
```

This separation ensures the project is highly scalable, maintainable, and easy to extend.

---

# 🧠 How It Works

1. **Input Parameters**: User inputs investment details (premiums, payouts, maturity amount, terms) in the frontend.
2. **Data Transmission**: The React frontend sends the data securely to the backend API.
3. **Processing**: The backend processes the data using the custom financial engine (powered by Python's `numpy-financial` and `pyxirr`).
4. **Calculations**: Cash flows are generated, and complex projections (IRR, CAGR, XIRR) are instantly calculated.
5. **Results Rendering**: The results are returned and displayed to the user via an interactive and dynamic projection dashboard.

---

# 🛠️ Tech Stack

### Frontend
* **React 19**
* **Vite**
* **TailwindCSS v4**

### Backend
* **FastAPI**
* **Python** (Libraries: `numpy-financial`, `pyxirr`, `pydantic`)

### Deployment
* **Frontend**: Vercel
* **Backend**: Render

---

# ⚙️ Local Setup

## 1. Clone the Repository

```bash
git clone https://github.com/NilanganDutta05/FinTone.git
cd FinTone
```

---

## 2. Backend Setup

Open a terminal at the repository root and navigate to the backend directory:

```bash
cd Investment_analyzer/backend

# (Optional) Create and activate a virtual environment
python -m venv .venv
.\.venv\Scripts\activate   # Windows
source .venv/bin/activate  # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Run the development server
python run.py
```

Backend runs at:

```text
http://localhost:8000
```

---

## 3. Frontend Setup

Open a **new** terminal at the repository root and navigate to the frontend directory:

```bash
cd Investment_analyzer/frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

# 📊 Example Workflow

```text
User Input
   ↓
Modern Frontend Form (React)
   ↓
API Request (Fetch)
   ↓
Financial Engine (FastAPI + Python)
   ↓
Return Analysis + Cashflow Generation
   ↓
Results Displayed (Glassmorphism UI)
```

---

# 🔮 Future Improvements

Planned improvements for FinTone:

* 📄 Upload and automatically analyze financial scheme PDFs
* 👤 User accounts, authentication, and personalized dashboards
* 💾 Save, compare, and export investment analyses
* 📈 Interactive data visualization charts for cash flow projections
* 📊 Integration with real-time market data APIs

---

# 🤝 Contributing

Contributions are always welcome!

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b feature-name
```

3. Commit your changes:

```bash
git commit -m "Add new feature"
```

4. Push to the branch and create a Pull Request

---

# 📜 License

This project is open-source and available under the **MIT License**. Build confidently!

---

# 👨‍💻 Author

Built by **Nilangan Dutta**

If you found this project useful, consider ⭐ starring the repository!
