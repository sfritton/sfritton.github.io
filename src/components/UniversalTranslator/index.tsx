import React, { useCallback, useRef, FormEvent, useState } from 'react';
import { DISTRESS_SIGNAL_KLINGON } from '../../constants';
import Button from '../Button';
import Link from '../Link';
import Layout from '../Layout';
import styles from './translator.module.css';

const DISTRESS_SIGNAL_ENGLISH = 'Engines damaged. Life support failing. Request immediate assistance!' as const;

const UniversalTranslator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const isTranslationSuccess = result.includes(DISTRESS_SIGNAL_ENGLISH);

  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      setResult(input.replace(new RegExp(DISTRESS_SIGNAL_KLINGON, 'ig'), DISTRESS_SIGNAL_ENGLISH));
    },
    [input, setResult],
  );

  return (
    <Layout.ToolContainer tool="translator">
      <h2>Universal Translator</h2>
      <div className={styles.grid}>
        <textarea
          className={styles.textarea}
          spellCheck="false"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleSubmit} className={styles.button}>
          Translate
        </Button>
        {result && (
          <div>
            <h3 className={styles.languageHeading}>Detected Language</h3>
            {isTranslationSuccess ? 'Klingon' : 'Unknown'}
            <h3 className={styles.translationHeading}>Translation</h3>
            {result}
          </div>
        )}
        {isTranslationSuccess && (
          <Link className={styles.button} color="blue" href="/02-encryption">
            Continue
          </Link>
        )}
      </div>
    </Layout.ToolContainer>
  );
};

export default UniversalTranslator;
