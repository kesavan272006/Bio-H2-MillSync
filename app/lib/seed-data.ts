// app/lib/seed-data.ts

export const generateMillData = (points = 24) => {
  return Array.from({ length: points }).map((_, i) => {
    // Mimic an 800°C - 1000°C thermal gradient
    const baseTemp = 850;
    const variance = Math.sin(i / 3) * 50; 
    
    return {
      time: `${i}:00`,
      temp: Math.floor(baseTemp + variance + Math.random() * 20),
      yield: Math.floor(85 + Math.random() * 10), // H2 Purity %
      pressure: Math.floor(35 + Math.random() * 10), // Steam Bar
      carbon: Math.floor(1.5 + Math.random() * 0.5), // CO2 tons sequestered
    };
  });
};

export const currentBatchStats = {
  moisture: 42,
  feedstock: "Bagasse v4.2",
  status: "Optimized",
  lastUpdate: new Date().toLocaleTimeString(),
};