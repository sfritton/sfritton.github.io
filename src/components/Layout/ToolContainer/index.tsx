import React, { useContext } from 'react';
import NavContext, { Tool } from '../NavContext';

interface Props {
  tool: Tool;
}

const ToolContainer: React.FC<Props> = ({ children, tool }) => {
  const { currentTool } = useContext(NavContext);

  if (tool !== currentTool) return null;

  return <div>{children}</div>;
};

export default ToolContainer;
