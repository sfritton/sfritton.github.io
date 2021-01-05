import React from 'react';
import Layout from '../Layout';
import Line from './Line';
import styles from './library.module.css';

const PersonalLibrary: React.FC = () => {
  return (
    <Layout.ToolContainer tool="library">
      <h2>Personal Library</h2>
      <h3>
        Continue reading <span className={styles.continueReading}>Henry V</span>
      </h3>
      <div className={styles.lines}>
        <h4>Court</h4>
        <Line lineNumber={87}>
          Brother John Bates, is not that the morning which breaks yonder?
        </Line>
        <h4>Bates</h4>
        <Line lineNumber={88}>
          I think it be, but we have no great cause to desire the approach of day.
        </Line>
        <h4>Williams</h4>
        <Line lineNumber={89}>
          We see yonder the beginning of the day, but I think we shall never see the end of it. —
          Who goes there?
        </Line>
        <h4>King Henry</h4>
        <Line lineNumber={90}>A friend.</Line>
        <h4>Williams</h4>
        <Line lineNumber={91}>Under what captain serve you?</Line>
        <h4>King Henry</h4>
        <Line lineNumber={92}>Under Sir Thomas Erpingham.</Line>
        <h4>Williams</h4>
        <Line lineNumber={93}>A good old commander and a most kind gentleman.</Line>
        <Line lineNumber={94}>I pray you, what thinks he of our estate?</Line>
        <h4>King Henry</h4>
        <Line lineNumber={95}>
          Even as men wracked upon a sand, that look to be washed off the next tide.
        </Line>
        <h4>Bates</h4>
        <Line lineNumber={96}>He hath not told his thought to the king?</Line>
        <h4>King Henry</h4>
        <Line lineNumber={97}>
          No. Nor it is not meet he should, for, though I speak it to you, I think the king is but a
          man as I am.
        </Line>
        <Line lineNumber={98}>The violet smells to him as it doth to me.</Line>
        <Line lineNumber={99}>The element shows to him as it doth to me.</Line>
        <Line lineNumber={100}>All his senses have but human conditions.</Line>
        <Line lineNumber={101}>
          His ceremonies laid by, in his nakedness he appears but a man, and though his affections
          are higher mounted than ours, yet when they stoop, they stoop with the like wing.
        </Line>
        <Line lineNumber={102}>
          Therefore, when he sees reason of fears as we do, his fears, out of doubt, be of the same
          relish as ours are.
        </Line>
        <Line lineNumber={103}>
          Yet, in reason, no man should possess him with any appearance of fear, lest he, by showing
          it, should dishearten his army.
        </Line>
      </div>
    </Layout.ToolContainer>
  );
};

export default PersonalLibrary;
