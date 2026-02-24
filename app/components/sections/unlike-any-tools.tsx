import { Container } from '../container';
import { Activity, Zap, Shield, Globe, Cpu, BarChart3 } from 'lucide-react';
import { UspSubTitle, UspTitle, UspWrapper } from '../usp-wrapper';

export const UnlikeAnyTool = () => {
  return (
    <div className='text-white'>
      <Container>
        <div className='text-center'>
          <h2 className='mb-4 text-4xl font-medium md:text-7xl'>
            Industrial Precision. <br /> Environmental Sovereignty.
          </h2>
          <p className='mx-auto mb-12 max-w-[60rem] text-lg text-primary-text md:text-xl'>
            Bio-H2 MillSync isn't just a dashboard—it's the digital backbone for 
            India's decentralized Green Hydrogen infrastructure.
          </p>
        </div>
      </Container>
      <Container>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <UspWrapper className='bg-emerald-500/5'>
            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400'>
              <Zap size={24} />
            </div>
            <UspTitle>IISc-Patented Reactor</UspTitle>
            <UspSubTitle>
              Optimized Oxy-Steam gasification achieving 99.97% H₂ purity by 
              leveraging existing 450°C+ mill waste heat.
            </UspSubTitle>
          </UspWrapper>

          <UspWrapper className='bg-emerald-500/5'>
            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400'>
              <Cpu size={24} />
            </div>
            <UspTitle>Neural Orchestration</UspTitle>
            <UspSubTitle>
              Deep Learning models (PINNs & TFT) predicting yields and 
              detecting anomalies in real-time industrial environments.
            </UspSubTitle>
          </UspWrapper>

          <UspWrapper className='bg-emerald-500/5'>
            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400'>
              <Globe size={24} />
            </div>
            <UspTitle>Carbon Negative</UspTitle>
            <UspSubTitle>
              Actively sequestering CO₂ into high-value Bio-Char, aligning with 
              PM-PRANAM and global net-zero missions.
            </UspSubTitle>
          </UspWrapper>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
          <UspWrapper className='bg-emerald-500/5' reverse>
             <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400'>
              <BarChart3 size={24} />
            </div>
            <UspTitle>SIGHT Revenue Engine</UspTitle>
            <UspSubTitle>
              Automated realization of ₹50/kg MNRE subsidies and real-time 
              Carbon Credit tokenization for sugar mill owners.
            </UspSubTitle>
          </UspWrapper>

          <UspWrapper className='bg-emerald-500/5' reverse>
             <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400'>
              <Shield size={24} />
            </div>
            <UspTitle>Energy Sovereignty</UspTitle>
            <UspSubTitle>
              Decoupling rural India from volatile global gas markets by 
              transforming mills into regional hydrogen fueling hubs.
            </UspSubTitle>
          </UspWrapper>
        </div>
      </Container>
    </div>
  );
};