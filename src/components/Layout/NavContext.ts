import React from 'react';

export type Tool = 'log' | 'translator' | 'library' | 'subspace' | 'comms';

interface NavContextInterface {
  currentTool: Tool;
  setCurrentTool: (tool: Tool) => void;
}

const NavContext = React.createContext<NavContextInterface>({
  currentTool: 'log',
  setCurrentTool: () => {},
});

export default NavContext;
