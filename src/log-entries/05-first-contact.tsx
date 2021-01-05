import React from 'react';
import LogEntry from '../components/LogEntry';
import TextLink from '../components/TextLink';

const AWAY_TEAM_DESTINATION = 'N44 05.378 W092 30.833' as const;
const AWAY_TEAM_DESTINATION_LINK = 'https://www.google.com/maps/search/N44+05.378+W092+30.833/@44.0896333,-92.516072,17z' as const;

const FirstContactEntry: React.FC = () => {
  return (
    <LogEntry stardate="46258.4">
      With the bomb disarmed, we are towing the Osprey to rendezvous with the Klingons. Even as this
      mission draws to a close, I have already received orders from Starfleet for the Enterprise's
      next assignment. We are to travel to Sol III and send an away team to{' '}
      <TextLink href={AWAY_TEAM_DESTINATION_LINK}>{AWAY_TEAM_DESTINATION}</TextLink>. There we must
      establish diplomatic relations between the Federation and a puzzling species known as the
      Geocachers...
    </LogEntry>
  );
};

export default FirstContactEntry;
