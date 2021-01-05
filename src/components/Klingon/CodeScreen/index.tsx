import React from 'react';
import KlingonEnsigna from '../KlingoEnsigna';
import styles from './codescreen.module.css';

export const DISARMING_CODE = 'yIqaSmoH' as const;

const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const CodeScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <KlingonEnsigna className={styles.ensigna} />
      <div className={styles.listBorder}>
        {letters.slice(0, 13).map((letter) => {
          const codeIndex =
            DISARMING_CODE.split('').findIndex((l) => l.toUpperCase() === letter) + 1;
          return (
            <div key={letter} className={styles.letterRow}>
              <div className={styles.letterKey}>{letter}</div>
              {DISARMING_CODE.split('').map((char, i) => (
                <div data-filled={i + 1 === codeIndex} className={styles.block} key={char} />
              ))}
              {codeIndex > 0 && <div className={styles.codeIndex}>{codeIndex}</div>}
            </div>
          );
        })}
      </div>
      <div className={styles.listBorder}>
        <div />
        {letters.slice(13).map((letter) => {
          const codeIndex =
            DISARMING_CODE.split('').findIndex((l) => l.toUpperCase() === letter) + 1;
          return (
            <div key={letter} className={styles.letterRow}>
              <div className={styles.letterKey}>{letter}</div>
              {DISARMING_CODE.split('').map((char, i) => (
                <div data-filled={i + 1 === codeIndex} className={styles.block} key={char} />
              ))}
              {codeIndex > 0 && <div className={styles.codeIndex}>{codeIndex}</div>}
            </div>
          );
        })}
      </div>
      <KlingonEnsigna className={styles.ensigna} />
    </div>
  );
};

export default CodeScreen;
