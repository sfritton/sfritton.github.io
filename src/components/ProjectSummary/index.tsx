import React from 'react';
import styles from './projectsummary.module.css';

interface Props {
  title: string;
  image: string;
  href?: string;
}

const Wrapper: React.FC<{ href?: string; className?: string }> = ({
  href,
  className = '',
  children,
}) => {
  if (href)
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );

  return <div className={className}>{children}</div>;
};

const ProjectSummary: React.FC<Props> = ({ title, image, children, href }) => {
  return (
    <Wrapper href={href} className={styles.projectSummary}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.aspectRatio}>
        <img className={styles.image} src={image} />
      </div>
      {children && <div className={styles.description}>{children}</div>}
    </Wrapper>
  );
};

export default ProjectSummary;
