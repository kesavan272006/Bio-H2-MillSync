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
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-medium tracking-tight">Incentive & Compliance</h1>
          <p className="text-grey text-lg mt-1">National Green Hydrogen Mission Portal</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white-a05 border border-white-a10 rounded-xl text-sm font-medium hover:bg-white-a10 transition-colors">
            <Download size={18} /> Export Audit Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-black rounded-xl text-sm font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
            Submit Monthly Filing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SIGHT Scheme Card */}
        <div className="lg:col-span-2 p-8 rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/5">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-xl font-medium">SIGHT Incentive Ledger</h3>
                <p className="text-sm text-grey">Direct Benefit Transfer Status</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">₹1,42,500.00</p>
              <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">Verified 24h Ago</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white-a05 border border-white-a10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-emerald-400" size={18} />
                <span className="text-sm">H₂ Purity (99.97% Verified)</span>
              </div>
              <span className="text-sm font-bold">+ ₹82,400.00</span>
            </div>
            <div className="p-4 rounded-2xl bg-white-a05 border border-white-a10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-emerald-400" size={18} />
                <span className="text-sm">Carbon Sequestration Credits</span>
              </div>
              <span className="text-sm font-bold">+ ₹60,100.00</span>
            </div>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="p-8 rounded-[2.5rem] border border-white-a10 bg-white-a05 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-medium mb-4">Active Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white-a05 border border-white-a08">
                <FileText className="text-grey" size={20} />
                <div className="text-xs">
                  <p className="font-medium">ISO 14687:2019</p>
                  <p className="text-grey">Valid until Sep 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white-a05 border border-white-a08">
                <Leaf className="text-emerald-400" size={20} />
                <div className="text-xs">
                  <p className="font-medium">Carbon Sink (PM-PRANAM)</p>
                  <p className="text-grey">Tier 1 Compliance</p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-3 text-xs font-bold text-emerald-400 uppercase tracking-widest border border-emerald-500/20 rounded-xl hover:bg-emerald-500/5 transition-colors">
            Renew All Credentials
          </button>
        </div>
      </div>

      {/* Audit History Table */}
      <div className="p-8 rounded-[2.5rem] border border-white-a10 bg-white-a05">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-medium flex items-center gap-2">
            <History className="text-grey" size={20} />
            Transmission Logs
          </h3>
          <button className="text-sm text-emerald-400 hover:underline">View All Logs</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs text-grey uppercase tracking-widest border-b border-white-a10">
                <th className="pb-4 font-medium">Batch ID</th>
                <th className="pb-4 font-medium">Date</th>
                <th className="pb-4 font-medium">H2 Produced</th>
                <th className="pb-4 font-medium">SIGHT Status</th>
                <th className="pb-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: 'SNXT-402', date: 'Feb 24, 2026', qty: '124 kg', status: 'Verified' },
                { id: 'SNXT-401', date: 'Feb 23, 2026', qty: '118 kg', status: 'Pending' },
                { id: 'SNXT-400', date: 'Feb 22, 2026', qty: '132 kg', status: 'Verified' },
                { id: 'SNXT-399', date: 'Feb 21, 2026', qty: '109 kg', status: 'Rejected' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white-a05 last:border-0 group">
                  <td className="py-4 font-mono text-xs">{row.id}</td>
                  <td className="py-4 text-grey">{row.date}</td>
                  <td className="py-4">{row.qty}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                      row.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-400' : 
                      row.status === 'Pending' ? 'bg-orange-500/10 text-orange-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <button className="p-2 opacity-0 group-hover:opacity-100 text-grey hover:text-white transition-all">
                      <ExternalLink size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}