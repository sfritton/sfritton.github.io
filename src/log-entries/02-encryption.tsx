import React from 'react';
import LogEntry from '../components/LogEntry';

const EncryptionEntry: React.FC = () => {
  return (
    <LogEntry stardate="46257.8">
      Even after translating the signal from Klingon, a portion of it remains unintelligible.
      Lieutenant Worf suspects that it is an encrypted message, but is unfamiliar with the method of
      encryption. I now believe that our mystery vessel is a cloaked Klingon Bird-of-Prey. To avoid
      putting my crew in unnecessary danger, I am notifying the Klingon High Council of the
      situation before proceeding.
    </LogEntry>
  );
};

export default EncryptionEntry;
