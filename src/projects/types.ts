import { ReactNode } from 'react';

export interface Project {
  title: string;
  image: string;
  href?: string;
  isInternalHref?: boolean;
  children?: ReactNode;
}
