import React from 'react';
import LogEntry from '../components/LogEntry';

const DecloakedEntry: React.FC = () => {
  return (
    <LogEntry stardate="Supplemental">
      We have successfully decloaked the Osprey and lowered its shields. Despite Commander Riker's
      protests, I have beamed aboard to disarm the detonator myself.
    </LogEntry>
  );
};

export default DecloakedEntry;
