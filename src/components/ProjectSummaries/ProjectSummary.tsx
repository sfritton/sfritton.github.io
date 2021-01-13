import React from 'react';
import { ExternalLink } from '../Link';
import styles from './projectsummary.module.css';

interface Props {
  title: string;
  image: string;
  href?: string;
}

export const ProjectSummaries: React.FC = ({ children }) => (
  <div className={styles.projectSummaries}>{children}</div>
);

const ImageWrapper: React.FC<{ href?: string }> = ({ href, children }) => {
  if (href)
    return (
      <a href={href} className={styles.aspectRatio}>
        {children}
      </a>
    );

  return <div className={styles.aspectRatio}>{children}</div>;
};

const ProjectSummary: React.FC<Props> = ({ title, image, children, href }) => {
  return (
    <div className={styles.projectSummary}>
      <h3 className={styles.title}>{title}</h3>
      <ImageWrapper href={href}>
        <img className={styles.image} src={image} />
      </ImageWrapper>
      {children && <div className={styles.description}>{children}</div>}
      {href && <ExternalLink href={href}>Check it out</ExternalLink>}
    </div>
  );
};

export default ProjectSummary;
