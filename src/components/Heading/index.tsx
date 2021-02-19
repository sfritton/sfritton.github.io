import React from 'react';

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  ref?: React.Ref<HTMLHeadingElement> | React.MutableRefObject<HTMLHeadingElement>;
}

const Heading: React.FC<Props> = React.forwardRef(({ level = 2, children, ...props }, ref) =>
  React.createElement(`h${level}`, { ...props, ref }, children),
);

export default Heading;
