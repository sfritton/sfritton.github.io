import React from 'react';
import Heading from '../Heading';
import { ExternalLink } from '../Link';
import styles from './projectsummary.module.css';

interface Props {
  title: string;
  image: string;
  href?: string;
  headingLevel?: 3 | 4;
}

const ImageWrapper: React.FC<{ href?: string }> = ({ href, children }) => {
  if (href)
    return (
      <a href={href} className={styles.aspectRatio}>
        {children}
      </a>
    );

  return <div className={styles.aspectRatio}>{children}</div>;
};

const ProjectSummary: React.FC<Props> = ({ title, image, children, href, headingLevel = 3 }) => {
  return (
    <div className={styles.projectSummary}>
      <Heading level={headingLevel} className={styles.title}>
        {title}
      </Heading>
      <ImageWrapper href={href}>
        <img className={styles.image} src={image} />
      </ImageWrapper>
      <div className={styles.description}>
        {children}
        {href && (
          <div className={styles.link}>
            <ExternalLink href={href}>Check it out</ExternalLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSummary;
