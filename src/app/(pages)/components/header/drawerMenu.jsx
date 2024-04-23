import React, { useState } from 'react';

const DrawerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      {isOpen && <div className="drawer">{children}</div>}
    </div>
  );
};

export default DrawerMenu;
