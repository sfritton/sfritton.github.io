import React, { useState } from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import CodeScreen, { DISARMING_CODE } from '../../components/Klingon/CodeScreen';
import Input from '../../components/Klingon/Input';
import CaptainsLogInsert from '../../components/Klingon/CaptainsLogInsert';
import DecloakedEntry from '../../log-entries/04-decloaked';
import styles from './decloaked.module.css';
import KlingonButton from '../../components/Klingon/KlingonButton';

const Decloaked: React.FC<PageProps> = () => {
  const [password, setPassword] = useState('');
  const isPasswordCorrect = DISARMING_CODE.toLowerCase() === password.toLowerCase();

  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" type="image/svg" href="/picard-geocache/images/klingon.svg" />
        <title>Klingon Osprey 053</title>
      </Helmet>
      <h1 className={styles.pageTitle}>Klingon Osprey 053</h1>
      <CaptainsLogInsert>
        <DecloakedEntry />
      </CaptainsLogInsert>
      <CodeScreen />
      <div className={styles.inputAndButton}>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />
        <KlingonButton disabled={!isPasswordCorrect} href="/05-first-contact">
          Disarm
        </KlingonButton>
      </div>
    </div>
  );
};

export default Decloaked;
