import React from 'react';
import { MainBoxItems } from './MainBoxItems';

function MainBoxList() {
  return (
    <>
      {MainBoxItems.map((el, index) => {
        return (
          <div style={{ background: el.color }} key={index} className="pr-3 pl-3 pt-4 pb-4 border">
            <div className="text-white">{el.title}</div>
            <div className="text-white font-weight-bold">{el.description}</div>
          </div>
        );
      })}
    </>
  );
}

export default MainBoxList;
