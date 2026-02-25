'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Settings, 
  LogOut,
  Radio,
  Bell
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Yield Oracle', href: '/dashboard/yield', icon: Zap },
    { name: 'SIGHT Compliance', href: '/dashboard/compliance', icon: ShieldCheck },
    { name: 'Energy Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Mill Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#010402] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white-a10 bg-white-a05 backdrop-blur-md flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Zap size={20} className="text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">SugarNxt</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' 
                    : 'text-grey hover:bg-white-a05 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white-a10">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-grey hover:text-red-400 transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Shutdown System</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header / Top Bar */}
        <header className="h-20 border-b border-white-a10 flex items-center justify-between px-8 bg-background/50 backdrop-blur-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Reactor Live</span>
            </div>
            <div className="flex items-center gap-2 text-grey">
              <Radio size={16} className="animate-pulse" />
              <span className="text-xs">Uptime: 142h 12m</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-white-a05 text-grey transition-colors">
              <Bell size={20} />
            </button>
            <div className="h-10 w-10 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">
              KG
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}