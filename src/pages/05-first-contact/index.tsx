import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import DistressSignalEntry from '../../log-entries/01-distress-signal';
import EncryptionEntry from '../../log-entries/02-encryption';
import UniversalTranslator from '../../components/UniversalTranslator';
import SubspaceComms from '../../components/SubspaceComms';
import PersonalLibrary from '../../components/PersonalLibrary';
import CouncilMeetingEntry from '../../log-entries/03-council-meeting';
import ShipToShipComms from '../../components/ShipToShipComms';
import DecloakedEntry from '../../log-entries/04-decloaked';
import FirstContactEntry from '../../log-entries/05-first-contact';

const FirstContact: React.FC<PageProps> = () => {
  return (
    <Layout.Grid>
      <Layout.Header title="USS Enterprise 1701-D" stardate="46258.2" />
      <Layout.Content>
        <Layout.ToolContainer tool="log">
          <h2>Captain's Log</h2>
          <FirstContactEntry />
          <DecloakedEntry />
          <CouncilMeetingEntry />
          <EncryptionEntry />
          <DistressSignalEntry />
        </Layout.ToolContainer>
        <UniversalTranslator />
        <PersonalLibrary />
        <SubspaceComms />
        <ShipToShipComms />
      </Layout.Content>
    </Layout.Grid>
  );
};

export default FirstContact;
