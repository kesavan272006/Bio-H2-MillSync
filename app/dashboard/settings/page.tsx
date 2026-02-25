'use client';

import React from 'react';
import { 
  Settings, 
  Cpu, 
  Key, 
  BellRing, 
  Globe, 
  ShieldCheck, 
  Save,
  Link as LinkIcon
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8 pb-12 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-medium tracking-tight">System Configuration</h1>
        <p className="text-grey text-lg mt-1">Manage MillSync hardware nodes and API integrations.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        
        {/* Hardware & IoT Integration */}
        <div className="p-8 rounded-[2.5rem] border border-white-a10 bg-white-a05">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white-a10 rounded-2xl text-white">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-medium">Reactor IoT Interface</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-grey uppercase tracking-widest ml-1">Hardware Node ID</label>
              <input 
                type="text" 
                defaultValue="MILL-SYNC-IISc-042" 
                className="w-full bg-white-a05 border border-white-a10 rounded-xl p-4 text-white outline-none focus:border-emerald-500/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-grey uppercase tracking-widest ml-1">Telemetry Frequency</label>
              <select className="w-full bg-white-a05 border border-white-a10 rounded-xl p-4 text-white outline-none focus:border-emerald-500/50">
                <option>Real-time (Buffered)</option>
                <option>5 Seconds</option>
                <option>30 Seconds</option>
              </select>
            </div>
          </div>
        </div>

        {/* API & Cloud Keys (Visualizing your .env setup) */}
        <div className="p-8 rounded-[2.5rem] border border-white-a10 bg-white-a05">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400">
                <Key size={24} />
              </div>
              <h3 className="text-xl font-medium">Cloud Intelligence Keys</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-bold uppercase">Linked</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white-a05 border border-white-a08">
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-grey" />
                <span className="text-sm font-medium">Gemini 1.5 Flash Oracle</span>
              </div>
              <span className="text-xs font-mono text-grey">AIzaSy...YsYCYi90Lg8</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white-a05 border border-white-a08">
              <div className="flex items-center gap-3">
                <LinkIcon size={18} className="text-grey" />
                <span className="text-sm font-medium">Amazon Bedrock (Nova Lite)</span>
              </div>
              <span className="text-xs font-mono text-grey">AKIAXI...SIGJ2Y</span>
            </div>
          </div>
        </div>

        {/* SIGHT Compliance Settings */}
        <div className="p-8 rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/5">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-emerald-400" size={24} />
            <h3 className="text-xl font-medium text-white">SIGHT Incentive Auto-Filing</h3>
          </div>
          <div className="flex items-center justify-between p-6 rounded-3xl bg-black/20 border border-emerald-500/10">
            <div className="space-y-1">
              <p className="font-medium text-white">Enable Automated Reporting</p>
              <p className="text-sm text-grey">Directly sync production data to MNRE portal for ₹50/kg incentive.</p>
            </div>
            <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
               <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="p-8 rounded-[2.5rem] border border-white-a10 bg-white-a05">
          <div className="flex items-center gap-3 mb-8">
            <BellRing className="text-orange-400" size={24} />
            <h3 className="text-xl font-medium">Safety Alert Thresholds</h3>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs text-grey mb-3 uppercase tracking-widest font-bold">
                <span>Critical Reactor Temp</span>
                <span className="text-white">1000°C</span>
              </div>
              <div className="h-2 w-full bg-white-a10 rounded-full">
                <div className="h-full w-[80%] bg-orange-500" />
              </div>
            </div>
            <button className="flex items-center gap-2 text-emerald-400 text-sm font-bold hover:underline">
              <Save size={16} /> Save Configuration Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}