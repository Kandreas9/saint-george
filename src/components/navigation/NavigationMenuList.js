import React from 'react';
import { menuItems } from './NavigationMenuItems';
import { Link } from 'react-router-dom';

function NavigationMenuList(props) {
  return (
    <ul>
      {menuItems.map((el, index) => {
        return (
          <li key={index}>
            <Link to={el.url} onClick={props.closeMenu}>
              {el.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavigationMenuList;
