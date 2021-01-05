import React, { useCallback, useState } from 'react';
import Button from '../Button';
import Layout from '../Layout';
import Link from '../Link';
import PinInput from '../PinInput';
import styles from './comms.module.css';

const ACCESS_CODE_HINT = [
  [87, 43], // g
  [87, 54], // a
  [92, 14], // m
  [92, 26], // m
  [93, 1], // a

  [88, 3], // t
  [95, 13], // w
  [89, 9], // o

  [95, 1], // e
  [88, 1], // i
  [87, 43], // g
  [96, 4], // h
  [100, 23], // t

  [90, 3], // f
  [94, 1], // i
  [91, 23], // v
  [103, 2], // e

  [88, 3], // t
  [96, 4], // h
  [92, 5], // r
  [103, 2], // e
  [95, 1], // e
] as const;

const ACCESS_CODE = 'gamma2853' as const;

const SubspaceComms: React.FC = () => {
  const [value, setValue] = useState('');
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    [setValue],
  );

  const handleSubmit = useCallback(() => {
    setIsValid(value.toLowerCase() === ACCESS_CODE.toLowerCase());
  }, [setIsValid, value]);

  return (
    <Layout.ToolContainer tool="subspace">
      <h2>Subspace Comms</h2>
      {isValid ? (
        <>
          Recognized user Jean-Luc Picard. Connecting to Subspace Communication System{' '}
          <span className={styles.loading}>
            <span>.</span>
            <span style={{ animationDelay: '200ms' }}>.</span>
            <span style={{ animationDelay: '400ms' }}>.</span>
          </span>
          <Link className={styles.continueLink} color="blue" href="/03-council-meeting">
            Continue
          </Link>
        </>
      ) : (
        <>
          Use of the Subspace Communication System requires Alpha-Two Clearance. Enter your Personal
          Access Code:
          <PinInput value={value} onChange={handleChange} />
          {isValid === false && (
            <div className={styles.errorText}>Did not recognize access code. Try again</div>
          )}
          <Button
            color="orange-light"
            className={styles.forgotButton}
            onClick={() => setIsHintVisible(true)}
          >
            Forgot your access code?
          </Button>
          <Button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </Button>
          {isHintVisible && (
            <div>
              <h3>Access Code Hint</h3>
              <ul>
                {ACCESS_CODE_HINT.map(([row, col], index) => (
                  <li key={index} className={styles.hint}>
                    <span>{row}</span>
                    <span>{col}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </Layout.ToolContainer>
  );
};

export default SubspaceComms;
