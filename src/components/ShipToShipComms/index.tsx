import React, { useCallback, useState } from 'react';
import Button from '../Button';
import Link from '../Link';
import Layout from '../Layout';
import styles from './s2s.module.css';

const DECLOAKING_CODE = 'nuqneh5572' as const;

const ShipToShipComms: React.FC = () => {
  const [value, setValue] = useState('');
  const [isDecloaked, setIsDecloaked] = useState(false);
  const [hasSent, setHasSent] = useState(false);

  const handleSubmit = useCallback(() => {
    setHasSent(true);
    setIsDecloaked(value.toLowerCase().replace(' ', '').includes(DECLOAKING_CODE));
  }, [setHasSent, value, setIsDecloaked]);

  return (
    <Layout.ToolContainer tool="comms">
      <h2>Ship-to-Ship Comms</h2>
      <div className={styles.grid}>
        <textarea
          className={styles.textarea}
          spellCheck="false"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send Message</Button>
        {hasSent && (
          <div>
            <h3 className={styles.responseHeading}>Response</h3>
            {isDecloaked
              ? 'This is Osprey 053. Recognized code NUQNEH 5572. Decloaking and lowering shields. Board when ready.'
              : 'No ships responded.'}
          </div>
        )}
        {isDecloaked && (
          <Link color="blue" href="/04-decloaked">
            Continue
          </Link>
        )}
      </div>
    </Layout.ToolContainer>
  );
};

export default ShipToShipComms;
