import Calculator from "./Calculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <div className="absolute top-0 inset-x-0 h-96 bg-linear-to-b from-purple-900/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6 backdrop-blur-sm">
            <span className="flex w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Smart Analytics Engine Active</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Master your wealth <br/>
            <span className="gradient-text">with absolute precision</span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Instantly evaluate policies, uncover true returns with XIRR capabilities, and project your cashflows using our enterprise-grade investment analyzer.
          </p>
        </section>

        <div className="relative z-10">
          <Calculator />
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="fixed top-1/2 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
    </main>
  );
}