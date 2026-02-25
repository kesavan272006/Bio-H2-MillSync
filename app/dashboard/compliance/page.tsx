'use client';

import React from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Download, 
  ExternalLink, 
  Leaf, 
  BadgeCheck, 
  History 
} from 'lucide-react';

export default function CompliancePage() {
  return (
    <div className="space-y-6 md:space-y-8 pb-12 px-1">
      {/* Header - Stacks on Mobile */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Incentive & Compliance</h1>
          <p className="text-grey text-base md:text-lg mt-1">National Green Hydrogen Mission Portal</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white-a05 border border-white-a10 rounded-xl text-sm font-medium hover:bg-white-a10 transition-colors text-white">
            <Download size={18} /> Export Audit Report
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-black rounded-xl text-sm font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
            Submit Monthly Filing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SIGHT Scheme Card - Full width on mobile */}
        <div className="lg:col-span-2 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-8 relative z-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">SIGHT Incentive Ledger</h3>
                <p className="text-sm text-grey">Benefit Transfer Status</p>
              </div>
            </div>
            <div className="sm:text-right w-full sm:w-auto p-4 sm:p-0 bg-white-a05 sm:bg-transparent rounded-2xl border border-white-a10 sm:border-0">
              <p className="text-3xl font-bold text-white tracking-tighter">₹1,42,500.00</p>
              <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mt-1">Verified 24h Ago</p>
            </div>
          </div>

          <div className="space-y-3 relative z-10">
            {[
              { label: 'H₂ Purity (99.97% Verified)', value: '+ ₹82,400.00' },
              { label: 'Carbon Sequestration Credits', value: '+ ₹60,100.00' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl md:rounded-2xl bg-white-a05 border border-white-a10 flex items-center justify-between hover:bg-white-a10 transition-colors">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="text-emerald-400 shrink-0" size={18} />
                  <span className="text-sm text-white/90">{item.label}</span>
                </div>
                <span className="text-sm font-bold text-white tabular-nums">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Section */}
        <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white-a10 bg-white-a05 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-medium mb-6 text-white">Active Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white-a05 border border-white-a08">
                <FileText className="text-grey shrink-0" size={24} />
                <div className="text-xs">
                  <p className="font-medium text-white text-sm">ISO 14687:2019</p>
                  <p className="text-grey mt-0.5">Valid until Sep 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white-a05 border border-white-a08">
                <Leaf className="text-emerald-400 shrink-0" size={24} />
                <div className="text-xs">
                  <p className="font-medium text-white text-sm">Carbon Sink (PM-PRANAM)</p>
                  <p className="text-grey mt-0.5">Tier 1 Compliance</p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full mt-8 py-4 text-xs font-bold text-emerald-400 uppercase tracking-widest border border-emerald-500/20 rounded-xl hover:bg-emerald-500/10 transition-all active:scale-95">
            Renew All Credentials
          </button>
        </div>
      </div>

      {/* Audit History Table - Responsive Scroll */}
      <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white-a10 bg-white-a05">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-medium flex items-center gap-2 text-white">
            <History className="text-grey" size={20} />
            Transmission Logs
          </h3>
          <button className="text-sm text-emerald-400 hover:underline font-medium">View All</button>
        </div>
        
        {/* Table Container with scroll */}
        <div className="overflow-x-auto -mx-2 px-2 scrollbar-hide">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="text-xs text-grey uppercase tracking-widest border-b border-white-a10">
                <th className="pb-4 font-medium">Batch ID</th>
                <th className="pb-4 font-medium">Date</th>
                <th className="pb-4 font-medium">H2 Produced</th>
                <th className="pb-4 font-medium">SIGHT Status</th>
                <th className="pb-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: 'SNXT-402', date: 'Feb 24, 2026', qty: '124 kg', status: 'Verified' },
                { id: 'SNXT-401', date: 'Feb 23, 2026', qty: '118 kg', status: 'Pending' },
                { id: 'SNXT-400', date: 'Feb 22, 2026', qty: '132 kg', status: 'Verified' },
                { id: 'SNXT-399', date: 'Feb 21, 2026', qty: '109 kg', status: 'Rejected' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white-a05 last:border-0 group hover:bg-white-a05 transition-colors">
                  <td className="py-5 font-mono text-xs text-white/80">{row.id}</td>
                  <td className="py-5 text-grey whitespace-nowrap">{row.date}</td>
                  <td className="py-5 text-white font-medium">{row.qty}</td>
                  <td className="py-5">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight ${
                      row.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-400' : 
                      row.status === 'Pending' ? 'bg-orange-500/10 text-orange-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-5 text-right">
                    <button className="p-2 text-grey hover:text-white transition-all">
                      <ExternalLink size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobile Swipe Hint */}
        <p className="mt-4 text-center text-[10px] text-grey uppercase tracking-widest md:hidden">
          ← Swipe to view full logs →
        </p>
      </div>
    </div>
  );
}