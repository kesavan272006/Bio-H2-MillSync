'use client';

import React from 'react';
import { Button, ButtonHighlight } from '../button';
import { Hero, HeroSubtitle, HeroTitle } from '../hero';
import { HeroImage } from '../heroImage';
import { ChevronRight } from '../icons/chevronRight';

export const HomePageHero = () => {
  return (
    <Hero>
      {/* Announcement Badge */}
      <Button
        className='animate-fade-in translate-y-[-1rem] opacity-0'
        href='#'
        variant='secondary'
        size='small'
      >
        <ButtonHighlight className='-ml-2 mr-2 bg-emerald-500/20 text-emerald-400'>
          New
        </ButtonHighlight>
        AI-Powered Yield Oracle v2.0 is live <ChevronRight className='ml-1' />
      </Button>

      {/* Main Title */}
      <HeroTitle className='animate-fade-in [--animation-delay:200ms] translate-y-[-1rem] opacity-0'>
        Bio-H2 MillSync: <br className='hidden md:block' /> 
        Cane-to-Cash Revolution
      </HeroTitle>

      {/* Subtitle */}
      <HeroSubtitle className='animate-fade-in [--animation-delay:400ms] translate-y-[-1rem] opacity-0'>
        Pioneering India's Green Hydrogen Mission. <br className='hidden md:block' />
        Orchestrating IISc-patented reactors for maximum purity and farmer profit.
      </HeroSubtitle>

      {/* FIXED BUTTON CONTAINER - Responsive Stacking */}
      <div className='animate-fade-in [--animation-delay:600ms] flex flex-col md:flex-row translate-y-[-1rem] items-center justify-center gap-4 opacity-0 px-6 md:px-0'>
        <Button 
          href='/login' 
          variant='primary' 
          size='large' 
          className='w-full md:w-auto justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]'
        >
          Enter Command Center
          <ChevronRight className='ml-2 h-4 w-4 fill-white' />
        </Button>
        <Button 
          href='#' 
          variant='secondary' 
          size='large' 
          className='w-full md:w-auto justify-center'
        >
          View Technical Blueprint
        </Button>
      </div>

      <HeroImage />
    </Hero>
  );
};