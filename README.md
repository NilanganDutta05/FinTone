# FinTone 💰📊

**FinTone** is a full-stack financial analysis tool designed to help users evaluate investment or insurance schemes by calculating realistic returns and generating cash-flow projections.

It allows users to input investment details and receive clear financial insights, making it easier to understand and compare long-term financial products.

---

# 🚀 Features

* 📈 **Investment Return Analysis**
  Evaluate total investment, maturity value, and overall profitability.

* 💵 **Cash Flow Generation**
  Generates year-by-year cash flow projections based on premiums and payouts.

* 🧮 **Financial Metrics**
  Calculates key metrics such as **IRR**, **CAGR**, and **XIRR**.

* ⚡ **Fast Backend API**
  Backend built using **FastAPI** for efficient request handling.

* 🎨 **Modern UI**
  Clean and responsive interface built with **React, Vite, and TailwindCSS**.

* 📱 **Responsive Design**
  Works smoothly across desktop and mobile devices.

---

# 🏗️ Project Structure

```text
FinTone
│
├── Investment_analyzer
│   ├── backend
│   │   ├── app
│   │   │   ├── api           # API routes
│   │   │   ├── models        # Pydantic models
│   │   │   ├── services      # Financial logic and calculation engine
│   │   │   └── utils         # Helper utilities
│   │   │
│   │   ├── run.py            # Backend entry point
│   │   └── requirements.txt
│   │
│   └── frontend
│       ├── src
│       │   ├── components    # React components
│       │   ├── App.jsx
│       │   └── main.jsx
│       │
│       ├── package.json
│       └── vite.config.js
```

The project follows a **layered architecture**:

```
Frontend → API Routes → Services → Financial Calculations
```

This separation helps keep the project maintainable and easy to extend.

---

# 🧠 How It Works

1. The user enters investment details in the frontend.
2. The frontend sends the data to the backend API.
3. The backend processes the data using the financial calculation engine.
4. Cash flows and financial metrics are calculated.
5. Results are returned to the frontend and displayed to the user.

---

# 🛠️ Tech Stack

### Frontend

* React
* Vite
* TailwindCSS

### Backend

* FastAPI
* Python
* numpy-financial
* pyxirr
* pydantic

### Deployment

* Frontend: Vercel
* Backend: Render

---

# ⚙️ Local Setup

## 1. Clone the Repository

```bash
git clone https://github.com/NilanganDutta05/FinTone.git
cd FinTone
cd Investment_analyzer
```

---

## 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

(Optional) Create a virtual environment:

```bash
python -m venv .venv
```

Activate the environment:

Windows:

```bash
.venv\Scripts\activate
```

Mac/Linux:

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the backend server:

```bash
python run.py
```

Backend runs at:

```
http://localhost:8000
```

---

## 3. Frontend Setup

Open a **new terminal** and run:

```bash
cd FinTone/Investment_analyzer/frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📊 Example Workflow

```
User Input
   ↓
React Frontend
   ↓
API Request
   ↓
FastAPI Backend
   ↓
Financial Calculations
   ↓
Results Displayed
```

---

# 🔮 Future Improvements

Planned improvements include:

* 📄 Upload and analyze financial scheme PDFs
* 👤 User authentication and personal dashboards
* 💾 Save and compare analyses
* 📈 Data visualization charts
* 📊 Integration with external financial data APIs

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch:

```
git checkout -b feature-name
```

3. Commit your changes:

```
git commit -m "Add feature"
```

4. Push and open a Pull Request

---

# 👨‍💻 Author

Built by **Nilangan Dutta**

If you found this project helpful, consider ⭐ starring the repository.
