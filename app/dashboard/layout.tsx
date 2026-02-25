'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Settings, 
  LogOut,
  Bell,
  Menu,
  X
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Yield Oracle', href: '/dashboard/yield', icon: Zap },
    { name: 'Compliance', href: '/dashboard/compliance', icon: ShieldCheck },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  if (!mounted) return null;

  return (
    <div className="flex h-screen bg-background text-primary-text overflow-hidden">
      
      {/* 1. MOBILE OVERLAY MENU (Appears when Hamburger is clicked) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
               <div className="flex items-center gap-3">
                <Zap size={24} className="text-emerald-500" />
                <span className="text-2xl font-bold tracking-tight text-white">SugarNxt</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white bg-white-a05 rounded-xl border border-white-a10">
                <X size={28} />
              </button>
            </div>
            
            <nav className="flex-1 space-y-4">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-4 p-5 rounded-2xl text-xl font-medium transition-all ${
                    pathname === item.href ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-grey'
                  }`}
                >
                  <item.icon size={28} />
                  {item.name}
                </Link>
              ))}
            </nav>

            <Link href="/login" className="flex items-center gap-4 p-5 text-red-400 text-xl font-medium mt-auto">
              <LogOut size={28} /> Logout
            </Link>
          </div>
        </div>
      )}

      {/* 2. DESKTOP SIDEBAR - Hidden on mobile (md:flex) */}
      <aside className="hidden md:flex w-64 border-r border-white-a10 bg-white-a05 backdrop-blur-md flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <Zap size={20} className="text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">SugarNxt</span>
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
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
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
          <Link href="/login" className="flex items-center gap-3 px-4 py-3 w-full text-grey hover:text-red-400 transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </aside>

      {/* 3. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        
        {/* RESPONSIVE HEADER */}
        <header className="h-20 border-b border-white-a10 flex items-center justify-between px-4 md:px-8 bg-background/50 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Trigger */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="md:hidden p-2 text-white bg-white-a05 border border-white-a10 rounded-lg"
            >
              <Menu size={24} />
            </button>

            {/* Status Pill - Hidden on small mobile to save space */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold text-emerald-400 uppercase tracking-widest">Reactor Live</span>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button className="p-2 rounded-full hover:bg-white-a05 text-grey">
              <Bell size={20} />
            </button>
            <div className="h-9 w-9 md:h-10 md:w-10 rounded-full border border-white-a10 bg-white-a05 flex items-center justify-center font-bold text-xs text-white">
              A
            </div>
          </div>
        </header>

        {/* Dynamic Content Container */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}