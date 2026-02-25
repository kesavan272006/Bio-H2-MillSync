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
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[120px]" />
      
      {/* The Login Card */}
      <div className="relative z-10 w-full max-w-[48rem] p-12 md:p-16 rounded-[3rem] border border-white-a10 bg-white-a05 backdrop-blur-2xl shadow-2xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-500/20 text-emerald-400 mb-8 shadow-inner">
            <Leaf size={40} />
          </div>
          <h1 className="text-6xl font-medium text-white mb-4 tracking-tight">SugarNxt</h1>
          <p className="text-primary-text text-xl">Initialize MillSync Protocol</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-grey ml-1 uppercase tracking-widest">Commanding Officer</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full bg-white-a05 border border-white-a10 rounded-2xl p-5 text-lg text-white placeholder:text-white-a20 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
              required
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium text-grey ml-1 uppercase tracking-widest">Authentication Email</label>
            <input 
              type="email" 
              placeholder="abc@gmail.com"
              className="w-full bg-white-a05 border border-white-a10 rounded-2xl p-5 text-lg text-white placeholder:text-white-a20 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
              required
            />
          </div>
          
          <Button variant="primary" size="large" className="w-full justify-center py-8 text-xl mt-6 shadow-xl shadow-emerald-500/20">
            {loading ? 'Decrypting Access...' : 'Enter Command Center'}
          </Button>
        </form>

        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white-a10"></span>
          </div>
          <div className="relative flex justify-center text-[1rem] uppercase">
            <span className="bg-[#010402] px-6 text-grey tracking-[0.3em] font-medium">Secure Gateway</span>
          </div>
        </div>

        <button 
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-4 bg-white text-background font-bold py-5 rounded-2xl hover:bg-off-white active:scale-[0.98] transition-all text-lg shadow-lg"
        >
          <Chrome size={24} />
          Sign in with Google Cloud
        </button>
      </div>
    </div>
  );
}