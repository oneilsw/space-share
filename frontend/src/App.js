import React from 'react';
import './App.css';
import Header from './Containers/Header'
import MainContainer from './Containers/MainContainer';

const App = () => {
  return (
    <div className="App">
      <div>
       <Header/>
      </div>
      <div>
       <MainContainer/>
      </div>
    </div>
  );
}

export default App;
