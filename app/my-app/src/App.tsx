import React from 'react';
import './App.css';
import UserComponent from "./components/UserComponent";
import ResourceComponent from "./components/ResourceComponent";
import ListComponent from "./components/ListComponent";


function App() {
  return (
    <div className="App">
      <UserComponent/>
      <ResourceComponent/>
      <ListComponent/>
    </div>
  );
}

export default App;
