'use client';

import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  Thermometer, 
  Droplets, 
  Clock, 
  ArrowUpRight, 
  Leaf 
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-medium tracking-tight">System Overview</h1>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Current H₂ Yield', value: '94.2%', icon: Zap, trend: '+2.4%', color: 'text-emerald-400' },
          { label: 'Reactor Temp', value: '842°C', icon: Thermometer, trend: 'Stable', color: 'text-orange-400' },
          { label: 'Bio-Char Output', value: '1.2t/h', icon: Leaf, trend: '+5.1%', color: 'text-emerald-400' },
          { label: 'Steam Pressure', value: '42 Bar', icon: Droplets, trend: '-0.8%', color: 'text-blue-400' },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-3xl border border-white-a10 bg-white-a05 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-xl bg-white-a05 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white-a05 ${stat.trend.includes('+') ? 'text-emerald-400' : 'text-grey'}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-grey text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Yield Oracle Prediction (PINN/TFT Logic) */}
        <div className="lg:col-span-2 p-8 rounded-[2.5rem] border border-white-a10 bg-white-a05 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <TrendingUp size={120} className="text-emerald-500/5 rotate-12" />
          </div>
          <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
            <Zap className="text-emerald-400" size={20} />
            Yield Oracle (TFT Prediction)
          </h3>
          <div className="h-64 flex items-end gap-2 px-2">
            {[40, 65, 55, 80, 95, 75, 90, 85, 94].map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <div 
                  className={`w-full rounded-t-lg transition-all duration-500 ${i === 8 ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'bg-white-a10 group-hover:bg-white-a20'}`}
                  style={{ height: `${h}%` }}
                />
                {i === 8 && <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-emerald-400 uppercase">Live</span>}
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between text-xs text-grey border-t border-white-a10 pt-6">
            <span>08:00 AM</span>
            <span>12:00 PM</span>
            <span>Current Batch (Bagasse v4)</span>
          </div>
        </div>

        {/* Real-time Logs / Anomalies */}
        <div className="p-8 rounded-[2.5rem] border border-white-a10 bg-white-a05">
          <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
            <Clock className="text-grey" size={20} />
            MillSync Events
          </h3>
          <div className="space-y-6">
            {[
              { msg: 'Oxy-Steam mix optimized', time: '2m ago', type: 'system' },
              { msg: 'Thermal gradient fluctuation', time: '14m ago', type: 'warning' },
              { msg: 'SIGHT Compliance report ready', time: '1h ago', type: 'success' },
              { msg: 'Batch #402 Processed', time: '2h ago', type: 'system' },
            ].map((log, i) => (
              <div key={i} className="flex gap-4">
                <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${log.type === 'warning' ? 'bg-orange-400' : log.type === 'success' ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                <div>
                  <p className="text-sm text-white/90">{log.msg}</p>
                  <p className="text-xs text-grey">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl border border-white-a10 text-xs font-bold uppercase tracking-widest hover:bg-white-a05 transition-colors">
            View Full Telemetry
          </button>
        </div>
      </div>

      {/* SIGHT Subsidy Tracker Card */}
      <div className="p-8 rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="h-16 w-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h4 className="text-xl font-medium">SIGHT Revenue Accrued</h4>
            <p className="text-emerald-400/80">Current Incentive: ₹50/kg (NGHM Compliance)</p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-3xl font-bold">₹1,42,500.00</p>
          <p className="text-xs text-grey uppercase tracking-tighter">Accrued this month</p>
        </div>
        <button className="px-6 py-3 bg-emerald-500 text-black font-bold rounded-xl flex items-center gap-2 hover:bg-emerald-400 transition-colors">
          Claim Credits <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}

function ShieldCheck({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
    </svg>
  );
}