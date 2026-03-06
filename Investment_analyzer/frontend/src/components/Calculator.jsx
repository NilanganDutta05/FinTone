import { useState } from "react";

const InputField = ({ label, name, value, onChange, prefix }) => (
  <div className="relative group">
    <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
      {label}
    </label>
    <div className="relative">
      {prefix && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-slate-400 font-medium">{prefix}</span>
        </div>
      )}
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl py-3 outline-none transition-all duration-300 focus:bg-slate-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 shadow-inner group-hover:border-slate-600 ${prefix ? 'pl-8 pr-4' : 'px-4'}`}
      />
    </div>
  </div>
);

const ResultCard = ({ label, value, colorClass = "text-white" }) => (
  <div className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-2xl backdrop-blur-sm relative overflow-hidden group hover:border-slate-600 transition-all">
    <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-white/5 to-transparent rounded-bl-full -mr-4 -mt-4"></div>
    <p className="text-slate-400 text-sm font-medium mb-1 relative z-10">{label}</p>
    <p className={`text-3xl font-bold tracking-tight relative z-10 ${colorClass}`}>
      {value}
    </p>
  </div>
);

const Calculator = () => {
  const [formData, setFormData] = useState();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Use the environment variable for production, or fallback to the Vite proxy in development
      const API_URL = import.meta.env.VITE_API_URL || "";
      
      const response = await fetch(`${API_URL}/api/analyze-scheme`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze investment");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Input Section */}
      <div className="flex-1 glass-panel rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -m-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -m-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Parameters
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="Premium Per Year" name="premium_per_year" value={formData.premium_per_year} onChange={handleChange} prefix="₹" />
              <InputField label="Premium Years" name="premium_years" value={formData.premium_years} onChange={handleChange} />
              <InputField label="Payout Every (Years)" name="payout_every" value={formData.payout_every} onChange={handleChange} />
              <InputField label="Payout Amount" name="payout_amount" value={formData.payout_amount} onChange={handleChange} prefix="₹" />
              <InputField label="Maturity Amount" name="maturity_amount" value={formData.maturity_amount} onChange={handleChange} prefix="₹" />
              <InputField label="Total Years" name="total_years" value={formData.total_years} onChange={handleChange} />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3.5 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 border border-purple-400/30"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : "Calculate Returns"}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-sm flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      <div className="flex-1 lg:w-96 flex flex-col gap-6">
        {result ? (
          <div className="glass-panel rounded-3xl p-8 border-t border-t-purple-500/30 animate-in fade-in slide-in-from-bottom-8 duration-500 h-full flex flex-col">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Projection
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <ResultCard label="Total Invested" value={`₹${result.analysis.total_invested.toLocaleString()}`} />
              <ResultCard label="Total Return" value={`₹${result.analysis.total_return.toLocaleString()}`} colorClass="text-blue-400" />
            </div>

            <div className="mt-4">
              <ResultCard 
                label="Maximum Profit Scenario" 
                value={`₹${result.analysis.profit.toLocaleString()}`} 
                colorClass="text-green-400" 
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 border-t border-slate-700/50 pt-6">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">IRR</p>
                <p className="text-xl font-bold text-white">{result.analysis.irr}</p>
              </div>
              <div className="pl-4 border-l border-slate-700/50">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">CAGR</p>
                <p className="text-xl font-bold text-white">{result.analysis.cagr}</p>
              </div>
              <div className="pl-4 border-l border-slate-700/50">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">XIRR</p>
                <p className="text-xl font-bold text-purple-400">{result.analysis.xirr}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-panel rounded-3xl p-8 border-dashed border-2 border-slate-700/50 h-full flex flex-col items-center justify-center text-center text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <h3 className="text-lg font-medium text-slate-400 mb-2">Awaiting Parameters</h3>
            <p className="text-sm max-w-[250px]">Enter your investment details and hit calculate to generate precision analytics.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
