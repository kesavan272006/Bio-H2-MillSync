'use client';

import { Features } from '../features';
import { 
  Recycle, 
  ThermometerSun, 
  Wind, 
  Sprout, 
  Zap, 
  Droplets 
} from 'lucide-react';

export const MomentumCycles = () => {
  return (
    <Features color='16, 185, 129' secondaryColor='5, 150, 105'>
      <Features.Main
        title={
          <>
            Circular Energy.
            <br />
            Continuous Growth.
          </>
        }
        text="MillSync orchestrates a closed-loop system where sugarcane waste becomes India's clean energy future. By recycling thermal energy and upcycling agricultural byproduct, we ensure maximum efficiency for every mill."
        maxWidth='70rem'
        image='/image/cycles.webp'
        imageSize='large'
      />
      <Features.Grid
        features={[
          {
            icon: Recycle,
            title: 'Waste-to-Wealth.',
            text: 'Converting low-value bagasse into high-margin Green Hydrogen and Bio-Char.',
          },
          {
            icon: ThermometerSun,
            title: 'Thermal Recycling.',
            text: 'Repurposing 450°C+ mill waste heat to eliminate external energy requirements for gasification.',
          },
          {
            icon: Sprout,
            title: 'PM-PRANAM Sync.',
            text: 'Returning Bio-Char back to the soil to enhance sugarcane yield for the next harvest cycle.',
          },
          {
            icon: Droplets,
            title: 'Resource Optimization.',
            text: 'AI-driven water stewardship within the closed-loop thermal cycle to protect rural resources.',
          },
          {
            icon: Wind,
            title: 'Carbon-Negative.',
            text: 'Locking atmospheric carbon into solid sinks, far exceeding traditional Net-Zero standards.',
          },
          {
            icon: Zap,
            title: 'Grid Independence.',
            text: 'Transforming sugar mills into decentralized, self-sustaining regional energy hubs.',
          },
        ]}
      />
    </Features>
  );
};