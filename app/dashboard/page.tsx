'use client';

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  TrendingUp, 
  Thermometer, 
  Droplets, 
  Clock, 
  ArrowUpRight, 
  Leaf,
  Activity
} from 'lucide-react';
import { generateMillData } from '@/app/lib/seed-data';

export default function DashboardPage() {
  const [chartData, setChartData] = useState<any[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setChartData(generateMillData(12));
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-medium tracking-tight">System Overview</h1>
        <p className="text-primary-text text-lg">Real-time telemetry from the MillSync Node.</p>
      </div>

      {/* Top Stats Grid - Restored to Template Glassmorphism */}
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
            <p className="text-grey text-sm mb-1 uppercase tracking-wider font-medium">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Yield Oracle Prediction */}
        <div className="lg:col-span-2 p-8 rounded-[2.5rem] border border-white-a10 bg-white-a05 relative overflow-hidden group">
          <h3 className="text-xl font-medium mb-8 flex items-center gap-2">
            <TrendingUp className="text-emerald-400" size={20} />
            Yield Oracle (TFT Neural Prediction)
          </h3>

          <div className="h-64 flex items-end gap-3 px-2">
            {chartData.map((data, i) => (
              <div key={i} className="flex-1 group/bar relative">
                <div 
                  className={`w-full rounded-t-xl transition-all duration-1000 ${
                    i === chartData.length - 1 
                      ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                      : 'bg-white-a10'
                  }`}
                  style={{ height: `${data.yield}%` }}
                />
                <div className="mt-4 text-[10px] text-grey text-center font-mono">
                  {data.time.split(':')[0]}h
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Events Log */}
        <div className="p-8 rounded-[2.5rem] border border-white-a10 bg-white-a05">
          <h3 className="text-xl font-medium mb-8 flex items-center gap-2">
            <Clock className="text-grey" size={20} />
            MillSync Events
          </h3>
          <div className="space-y-6">
            {[
              { msg: 'Oxy-Steam mix optimized', time: '2m ago', type: 'system' },
              { msg: 'Thermal gradient fluctuation', time: '14m ago', type: 'warning' },
              { msg: 'SIGHT Compliance report ready', time: '1h ago', type: 'success' },
            ].map((log, i) => (
              <div key={i} className="flex gap-4">
                <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${
                  log.type === 'warning' ? 'bg-orange-400' : 
                  log.type === 'success' ? 'bg-emerald-400' : 'bg-blue-400'
                }`} />
                <div>
                  <p className="text-sm text-primary-text">{log.msg}</p>
                  <p className="text-xs text-grey">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SIGHT Subsidy Card */}
      <div className="p-10 rounded-[2.4rem] border border-white-a10 bg-white-a05 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="flex items-center gap-8 relative z-10">
            <div className="h-20 w-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
              <Zap size={40} />
            </div>
            <div>
              <h4 className="text-2xl font-medium mb-1">SIGHT Revenue Accrued</h4>
              <p className="text-emerald-400 font-medium">Incentive: ₹50/kg</p>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-6 relative z-10">
            <div className="text-center md:text-right">
              <p className="text-5xl font-bold tracking-tighter">₹1,42,500<span className="text-2xl text-grey font-light">.00</span></p>
            </div>
            <button className="group px-8 py-4 bg-emerald-500 text-black font-bold rounded-2xl flex items-center gap-3 hover:bg-emerald-400 transition-all">
              Claim Credits 
              <ArrowUpRight size={20} />
            </button>
          </div>
      </div>
    </div>
  );
}