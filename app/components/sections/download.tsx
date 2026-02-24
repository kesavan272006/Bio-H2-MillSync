import Image from 'next/image';
import { Button } from '../button';
import { Zap } from 'lucide-react';

export const DownloadApp = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='image-container'>
        <Image
          src='/image/appIcon.webp' 
          alt='Bio-H2 MillSync Icon'
          fill
          className='image max-w-[12.8rem] brightness-110 sepia-[0.2] hue-rotate-[90deg]'
        />
      </div>
      <h2 className='my-9 text-center text-5xl leading-none tracking-tight md:text-9xl'>
        Powering India's Future. <br /> Fueling Bharat Today.
      </h2>
      <p className='mb-12 max-w-[60rem] text-center text-lg text-primary-text md:text-xl'>
        Join the decentralized green hydrogen revolution. Deploy the IISc-patented 
        reactor and start realizing SIGHT incentives today.
      </p>
      <div className='my-9 flex items-center gap-4'>
        <Button href='/dashboard' variant='primary' size='large'>
          Initialize Command Center
        </Button>
        <Button href='#' variant='secondary' size='large'>
          <Zap className='mr-2 h-5 w-5 text-emerald-400' />
          Request Pilot Hub
        </Button>
      </div>
    </div>
  );
};