import React, { useState } from 'react';
import menuIcon from '../../icons/menu.svg';
import NavigationMenuList from './NavigationMenuList';

function NavigationMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="ml-auto">
      <img src={menuIcon} alt="" onClick={() => setShowMenu(!showMenu)} />

      {showMenu && <NavigationMenuList closeMenu={() => setShowMenu(false)} />}
    </nav>
  );
}

export default NavigationMenu;
