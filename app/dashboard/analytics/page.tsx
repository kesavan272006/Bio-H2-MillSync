'use client';

import React from 'react';
import { 
  BarChart3, 
  Leaf, 
  Wind, 
  Flame, 
  ArrowDownCircle, 
  Share2,
  TrendingDown
} from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-medium tracking-tight">Environmental Impact</h1>
          <p className="text-grey text-lg mt-1">Carbon Sequestration & Thermal Recovery Ledger</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white-a05 border border-white-a10 rounded-xl text-sm font-medium hover:bg-white-a10 transition-all">
          <Share2 size={18} /> Publish ESG Report
        </button>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Carbon Offset Card */}
        <div className="lg:col-span-2 p-10 rounded-[3rem] border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400">
                <Leaf size={24} />
              </div>
              <h3 className="text-2xl font-medium">Net CO₂ Sequestration</h3>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12 items-end">
              <div className="flex-1 w-full">
                <div className="flex justify-between mb-2 text-sm text-grey uppercase tracking-widest font-medium">
                  <span>Carbon Negative Status</span>
                  <span className="text-emerald-400">Achieved</span>
                </div>
                <div className="h-4 w-full bg-white-a05 rounded-full overflow-hidden border border-white-a10">
                  <div className="h-full w-[85%] bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                </div>
                <p className="mt-4 text-grey text-sm italic">
                  SugarNxt is locking 1.8kg of CO₂ into solid Bio-Char for every 1kg of H₂ produced.
                </p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-white">428.5 <span className="text-2xl text-grey font-light">tons</span></p>
                <p className="text-emerald-400 font-bold uppercase text-xs tracking-tighter mt-1">Offset this season</p>
              </div>
            </div>
          </div>
        </div>

        {/* Waste-Heat Card */}
        <div className="p-10 rounded-[3rem] border border-orange-500/20 bg-orange-500/5">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-orange-500/20 rounded-2xl text-orange-400">
              <Flame size={24} />
            </div>
            <h3 className="text-xl font-medium">Heat Recovery</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-grey text-xs uppercase mb-1 font-bold">Steam Source Temp</p>
              <p className="text-2xl font-bold">450°C+</p>
            </div>
            <div className="pt-4 border-t border-white-a10">
              <p className="text-grey text-xs uppercase mb-1 font-bold">Energy Saved (Weekly)</p>
              <div className="flex items-center gap-2 text-orange-400">
                <TrendingDown size={20} />
                <p className="text-2xl font-bold">12.4 MWh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Circular Economy Flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-[2.5rem] border border-white-a10 bg-white-a05">
          <h4 className="text-lg font-medium mb-6 flex items-center gap-2">
            <Wind className="text-blue-400" size={18} /> Emissions Reduction
          </h4>
          <div className="space-y-4">
             {[
               { label: 'Avoided Methane (Bagasse Rot)', value: '14.2t', color: 'bg-blue-400' },
               { label: 'Avoided Coal (Mill Power)', value: '82.8t', color: 'bg-emerald-400' },
               { label: 'Avoided Diesel (H2 Logistics)', value: '24.1t', color: 'bg-white' },
             ].map((item, i) => (
               <div key={i}>
                 <div className="flex justify-between text-xs text-grey mb-2">
                   <span>{item.label}</span>
                   <span className="text-white font-bold">{item.value}</span>
                 </div>
                 <div className="h-1.5 w-full bg-white-a05 rounded-full overflow-hidden">
                   <div className={`h-full ${item.color}`} style={{ width: item.value.replace('t', '') + '%' }} />
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Bio-Char Utilization */}
        <div className="p-8 rounded-[2.5rem] border border-white-a10 bg-white-a05 flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
              <ArrowDownCircle className="text-emerald-400" size={18} /> Solid Carbon Sink
            </h4>
            <p className="text-grey text-sm leading-relaxed mb-6">
              Bio-Char produced during gasification is diverted to local sugarcane fields as a soil conditioner, fulfilling **PM-PRANAM** mission requirements.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white-a05 border border-white-a08 text-center">
              <p className="text-2xl font-bold">88%</p>
              <p className="text-[10px] text-grey uppercase">Soil Enrichment</p>
            </div>
            <div className="p-4 rounded-2xl bg-white-a05 border border-white-a08 text-center">
              <p className="text-2xl font-bold">12.2k</p>
              <p className="text-[10px] text-grey uppercase">Credits Issued</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}