import { Button, ButtonHighlight } from '../button';
import { Hero, HeroSubtitle, HeroTitle } from '../hero';
import { HeroImage } from '../heroImage';
import { ChevronRight } from '../icons/chevronRight';

export const HomePageHero = () => {
  return (
    <Hero>
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
      <HeroTitle className='animate-fade-in [--animation-delay:200ms] translate-y-[-1rem] opacity-0'>
        Bio-H2 MillSync: <br className='hidden md:block' /> 
        Cane-to-Cash Revolution
      </HeroTitle>
      <HeroSubtitle className='animate-fade-in [--animation-delay:400ms] translate-y-[-1rem] opacity-0'>
        Pioneering India's Green Hydrogen Mission. <br className='hidden md:block' />
        Orchestrating IISc-patented reactors for maximum purity and farmer profit.
      </HeroSubtitle>
      <div className='animate-fade-in [--animation-delay:600ms] flex translate-y-[-1rem] items-center justify-center gap-4 opacity-0'>
        <Button href='/dashboard' variant='primary' size='large'>
          Enter Command Center
          <ChevronRight className='ml-2 h-4 w-4 fill-white' />
        </Button>
        <Button href='#' variant='secondary' size='large'>
          View Technical Blueprint
        </Button>
      </div>
      <HeroImage />
    </Hero>
  );
};