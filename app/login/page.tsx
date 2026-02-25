'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../components/button';
import { Chrome, Leaf } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Dynamic Background Glows - Scaled for mobile */}
      <div className="absolute top-[-5%] left-[-10%] w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] bg-emerald-500/5 rounded-full blur-[80px] md:blur-[120px]" />
      
      {/* The Login Card - Fluid Width and Responsive Padding */}
      <div className="relative z-10 w-full max-w-[42rem] p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white-a10 bg-white-a05 backdrop-blur-2xl shadow-2xl">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-emerald-500/20 text-emerald-400 mb-6 md:mb-8 shadow-inner">
            <Leaf size={32} className="md:w-[40px] md:h-[40px]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-3 md:mb-4 tracking-tight">SugarNxt</h1>
          <p className="text-primary-text text-lg md:text-xl">Initialize MillSync Protocol</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5 md:space-y-6">
          <div className="space-y-2 md:space-y-3">
            <label className="text-xs md:text-sm font-medium text-grey ml-1 uppercase tracking-widest">Authorized Officer</label>
            <input 
              type="text" 
              placeholder="Full Name"
              className="w-full bg-white-a05 border border-white-a10 rounded-xl md:rounded-2xl p-4 md:p-5 text-base md:text-lg text-white placeholder:text-white-a20 outline-none focus:border-emerald-500/50 transition-all"
              required
            />
          </div>
          <div className="space-y-2 md:space-y-3">
            <label className="text-xs md:text-sm font-medium text-grey ml-1 uppercase tracking-widest">System Email</label>
            <input 
              type="email" 
              placeholder="officer@sugarnxt.com"
              className="w-full bg-white-a05 border border-white-a10 rounded-xl md:rounded-2xl p-4 md:p-5 text-base md:text-lg text-white placeholder:text-white-a20 outline-none focus:border-emerald-500/50 transition-all"
              required
            />
          </div>
          
          <Button variant="primary" size="large" className="w-full justify-center py-6 md:py-8 text-lg md:text-xl mt-4 md:mt-6 shadow-xl shadow-emerald-500/20">
            {loading ? 'Authenticating...' : 'Enter Command Center'}
          </Button>
        </form>

        <div className="relative my-10 md:my-12">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white-a10"></span>
          </div>
          <div className="relative flex justify-center text-[0.85rem] md:text-[1rem] uppercase">
            <span className="bg-[#010402] px-4 md:px-6 text-grey tracking-[0.2em] md:tracking-[0.3em] font-medium">Secure Gateway</span>
          </div>
        </div>

        <button 
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-3 md:gap-4 bg-white text-background font-bold py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-off-white active:scale-[0.98] transition-all text-base md:text-lg shadow-lg"
        >
          <Chrome size={20} className="md:w-[24px] md:h-[24px]" />
          Sign in with Google Cloud
        </button>
      </div>
    </div>
  );
}