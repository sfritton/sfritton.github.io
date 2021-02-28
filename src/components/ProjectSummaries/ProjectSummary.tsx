import React from 'react';
import { Project } from '../../projects/types';
import Heading from '../Heading';
import { InternalLink, ExternalLink } from '../Link';
import styles from './projectsummary.module.css';

const ImageWrapper: React.FC<{ href?: string }> = ({ href, children }) => {
  if (href)
    return (
      <a href={href} className={styles.aspectRatio}>
        {children}
      </a>
    );

  return <div className={styles.aspectRatio}>{children}</div>;
};

const ProjectSummary: React.FC<Project & { headingLevel?: 3 | 4 }> = ({
  title,
  image,
  children,
  href,
  isInternalHref = false,
  headingLevel = 3,
}) => {
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
            {isInternalHref ? (
              <InternalLink to={href}>Check it out</InternalLink>
            ) : (
              <ExternalLink href={href}>Check it out</ExternalLink>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSummary;
