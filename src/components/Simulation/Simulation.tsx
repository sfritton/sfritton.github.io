import React, { useEffect, useRef } from 'react';
import P5 from 'p5';

export interface SimulationProps {
  sketch: (p5: P5) => void;
}

const Simulation: React.FC<SimulationProps> = ({ sketch }) => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!divRef.current) return;
    new P5(sketch, divRef.current);
  }, []);

  return <div ref={divRef} />;
};

export default Simulation;
