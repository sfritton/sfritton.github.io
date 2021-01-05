import React from 'react';
import DecryptionKey from '../components/DecryptionKey';
import LogEntry from '../components/LogEntry';

const CouncilMeetingEntry: React.FC = () => {
  return (
    <LogEntry stardate="46258.2">
      The Klingon High Council has informed me that the mysterious vessel is a secret Osprey-class
      warship: a relic from the 23rd century war between the Klingon Empire and the Federation.
      These unmanned ships were filled with explosives and set to detonate when a Federation vessel
      answered their distress call. During the war, dozens of these ships were set adrift through
      Federation space. Upon the signing of the Treaty of Alliance, the Klingon Empire recovered as
      many of these ships as was possible.
      <br />
      <br />
      As we are the closest starship, the Council has asked the Enterprise to disarm the vessel and
      tow it to a rendezvous point where it will be reclaimed by the Empire. They have provided me
      with a key to decrypt the distress signal, which should contain a code that will allow us to
      remotely uncloak the vessel and lower its shields.
      <h4>Decryption Key</h4>
      <DecryptionKey />
    </LogEntry>
  );
};

export default CouncilMeetingEntry;
