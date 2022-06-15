import React, { FC } from 'react';

interface ISidebar {
  children: JSX.Element[] | JSX.Element;
}

const Sidebar: FC<ISidebar> = ({ children }) => <div>{children}</div>;

export default Sidebar;
