import React from 'react';
import NavigationMenu from './navigation/NavigationMenu';

function Header() {
  return (
    <header className="d-flex border-bottom p-4">
      <span>Saint George</span>

      <NavigationMenu />
    </header>
  );
}

export default Header;
