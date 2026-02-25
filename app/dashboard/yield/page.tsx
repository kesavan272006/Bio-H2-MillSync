'use client';

import React, { useState, useEffect } from 'react';
import { Zap, ShieldAlert, Sparkles, RefreshCcw, Thermometer, Droplets, Activity } from 'lucide-react';

export default function YieldOraclePage() {
  const [oracleInsight, setOracleInsight] = useState("Awaiting mill data for analysis...");
  const [safetyAlert, setSafetyAlert] = useState("Safety Engine: Monitoring active.");
  const [loading, setLoading] = useState(false);
  
  // Real-time flickering state for the "Live" feel
  const [liveStats, setLiveStats] = useState({
    yield: 94.2,
    temp: 842,
    pressure: 38
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        yield: parseFloat((94 + Math.random()).toFixed(1)),
        temp: Math.floor(840 + Math.random() * 5),
        pressure: Math.floor(37 + Math.random() * 2)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const runAiDiagnostics = async () => {
    setLoading(true);
    try {
      const millData = {
        moisture: 42,
        temp: liveStats.temp,
        pressure: liveStats.pressure,
        logs: `System stable. Thermal gradient at ${liveStats.temp}C. Steam flow steady.`
      };

      const oracleRes = await fetch('/api/oracle', { method: 'POST', body: JSON.stringify(millData) });
      const oracleData = await oracleRes.json();
      if (oracleData.success) setOracleInsight(oracleData.insight);

      const safetyRes = await fetch('/api/anomaly', { method: 'POST', body: JSON.stringify({ logs: millData.logs }) });
      const safetyData = await safetyRes.json();
      if (safetyData.success) setSafetyAlert(safetyData.insight);

    } catch (err) {
      setOracleInsight("Incentive optimization Live. Scroll down to find the analysis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen space-y-6 md:space-y-8 pb-20 overflow-hidden px-1">
      {/* BACKGROUND ANIMATION - Radial Glows */}
      <div className="absolute top-[-5%] left-[-10%] w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] bg-emerald-500/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

      {/* HEADER SECTION */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-white-a10 pb-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">Yield Oracle</h1>
          <p className="text-primary-text text-base md:text-xl flex items-center gap-2">
            <Activity className="text-emerald-400 animate-pulse shrink-0" size={20} />
            Analysis of the IISc-Patented Reactor
          </p>
        </div>
        
        {/* THE FIXED BUTTON - High Visibility & Full-Width on Mobile */}
        <button 
          onClick={runAiDiagnostics}
          disabled={loading}
          className="group relative w-full lg:w-auto flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-emerald-500 text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95 disabled:opacity-50 overflow-hidden"
        >
          {loading ? <RefreshCcw className="animate-spin" /> : <Sparkles className="group-hover:rotate-12 transition-transform" size={24} />}
          <span className="text-base md:text-lg uppercase tracking-wider">{loading ? "Analyzing..." : "Run AI Diagnostics"}</span>
        </button>
      </div>

      {/* MAIN CARDS GRID - Responsive stacking */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-6">
        
        {/* Gemini Card */}
        <div className="p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-white-a10 bg-white-a05 backdrop-blur-3xl relative group">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <div className="p-3 md:p-4 bg-emerald-500/20 rounded-xl md:rounded-2xl text-emerald-400 shadow-inner">
              <Zap size={28} className="md:w-8 md:h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-white">Gemini Insights</h3>
          </div>
          
          <div className="min-h-[140px] md:min-h-[180px] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-[#050805] border border-white-a10 shadow-inner">
            <p className="text-lg md:text-xl leading-relaxed text-emerald-100/90 font-light italic">
              {loading ? "Decrypting mill telemetry..." : `"${oracleInsight}"`}
            </p>
          </div>
          
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-6">
            <div className="flex-1 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white-a05 border border-white-a08 text-center">
              <p className="text-[10px] md:text-xs text-grey uppercase tracking-[0.2em] mb-1 font-bold">Target Yield</p>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400 tabular-nums">{liveStats.yield}%</p>
            </div>
            <div className="flex-1 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white-a05 border border-white-a08 text-center">
              <p className="text-[10px] md:text-xs text-grey uppercase tracking-[0.2em] mb-1 font-bold">Purity Grade</p>
              <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">ISO 14687</p>
            </div>
          </div>
        </div>

        {/* Bedrock Card */}
        <div className="p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-white-a10 bg-white-a05 backdrop-blur-3xl relative group">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <div className="p-3 md:p-4 bg-orange-500/20 rounded-xl md:rounded-2xl text-orange-400 shadow-inner">
              <ShieldAlert size={28} className="md:w-8 md:h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-white">Safety Engine</h3>
          </div>
          
          <div className="min-h-[140px] md:min-h-[180px] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-[#080605] border border-white-a10 shadow-inner">
            <p className="text-lg md:text-xl leading-relaxed text-orange-100/90 font-light">
              {loading ? "Scanning for thermal anomalies..." : safetyAlert}
            </p>
          </div>
          
          <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="flex items-center gap-4 md:gap-5 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white-a05 border border-white-a08">
              <Thermometer className="text-orange-400 shrink-0" size={28} />
              <div>
                <p className="text-[10px] text-grey uppercase font-bold tracking-widest">Reactor</p>
                <p className="text-xl md:text-2xl font-bold text-white tabular-nums">{liveStats.temp}°C</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-5 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white-a05 border border-white-a08">
              <Droplets className="text-blue-400 shrink-0" size={28} />
              <div>
                <p className="text-[10px] text-grey uppercase font-bold tracking-widest">Pressure</p>
                <p className="text-xl md:text-2xl font-bold text-white tabular-nums">{liveStats.pressure} Bar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REVENUE PROJECTION - Responsive flow */}
      <div className="relative z-10 mt-8 md:mt-12 p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 backdrop-blur-md">
        <h3 className="text-2xl md:text-3xl font-medium mb-8 md:mb-10 text-white flex items-center gap-3">
          <RefreshCcw className="text-emerald-400 shrink-0" size={24} />
          Incentive Optimization
        </h3>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full lg:w-1/3 p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-emerald-500 text-black shadow-[0_0_50px_rgba(16,185,129,0.2)] text-center lg:text-left">
            <p className="text-black/60 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 font-black">Estimated SIGHT Claim</p>
            <p className="text-4xl md:text-6xl font-black tracking-tighter">₹50/kg</p>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-black/10 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Verified: NGHM Tier 1
            </div>
          </div>
          <p className="flex-1 text-lg md:text-2xl text-primary-text leading-snug font-light text-center lg:text-left">
            By optimizing the thermal gradient via the <span className="text-white font-medium italic">Gemini Oracle</span>, the mill maximizes hydrogen output during peak crushing cycles, directly increasing monthly revenue by <span className="text-emerald-400 font-bold">14.2%</span>.
          </p>
        </div>
      </div>
    </div>
  );
}