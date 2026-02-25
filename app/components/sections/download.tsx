'use client';

import Image from 'next/image';
import { Button } from '../button';
import { Zap } from 'lucide-react';

export const DownloadApp = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-0 py-20'>
      {/* Icon Container with Responsive Sizing */}
      <div className='relative w-[10rem] h-[10rem] md:w-[12.8rem] md:h-[12.8rem] mb-8'>
        <Image
          src='/image/appIcon.webp' 
          alt='Bio-H2 MillSync Icon'
          fill
          className='object-contain brightness-110 sepia-[0.2] hue-rotate-[90deg] drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]'
        />
      </div>

      {/* Responsive Typography */}
      <h2 className='mb-8 text-center text-4xl md:text-9xl leading-[1.1] tracking-tighter text-white'>
        Powering India's Future. <br className='hidden md:block' /> 
        Fueling Bharat Today.
      </h2>

      <p className='mb-12 max-w-[60rem] text-center text-base md:text-xl text-primary-text leading-relaxed'>
        Join the decentralized green hydrogen revolution. Deploy the IISc-patented 
        reactor and start realizing SIGHT incentives today.
      </p>

      {/* RESPONSIVE BUTTON GROUP - Stacks on Mobile */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto'>
        <Button 
          href='/dashboard' 
          variant='primary' 
          size='large' 
          className='w-full md:w-auto justify-center py-6 md:py-4 px-10 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
        >
          Initialize Command Center
        </Button>
        <Button 
          href='#' 
          variant='secondary' 
          size='large' 
          className='w-full md:w-auto justify-center py-6 md:py-4 px-10 border-white-a10 bg-white-a05'
        >
          <Zap className='mr-2 h-5 w-5 text-emerald-400' />
          Request Pilot Hub
        </Button>
      </div>
    </div>
  );
};