import React from 'react';
import MainBoxList from '../components/mainBox/MainBoxList';

function Home() {
  return (
    <div className="d-flex flex-column h-100">
      <div className="d-flex flex-column h-50 text-center justify-content-center">
        <h1>
          Saint George
          <br /> SCI
        </h1>
        <div className="m-auto">
          <p className="text-left">
            Cabinet Pédiatrique <br /> Dr.Georgios Karydopoulos <br /> Pédiatre <br /> Centre Médical du Littoral <br />{' '}
            600 Rue Marcel Pagnol <br /> 34470 Pérols
          </p>
        </div>
      </div>
      <div /*className="d-flex flex-wrap align-content-start h-50 text-center"*/ className="main-box-grid">
        <MainBoxList />
      </div>
    </div>
  );
}

export default Home;
