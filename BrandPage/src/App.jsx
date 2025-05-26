import React from 'react';
import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import Bottom from './components/Bottom';
import Cokeimage from './images/Cokeimage.webp'

function App() {
  return (
      <div>
        <Nav/>
      <div>
        <img className="cokebody" src={Cokeimage} alt="ci" />
      </div>

      <div className='content'>
        <Content/>
      </div>
        <Bottom/>
      </div>
  );
}

export default App;
