import React from 'react';
import './App.css';
import UserComponent from "./components/UserComponent";
import ResourceComponent from "./components/ResourceComponent";
import ListComponent from "./components/ListComponent";
import ListResourceComponent from "./components/ListResourceComponent";


function App() {
  return (
    <div className="App">
      <UserComponent/>
      <ResourceComponent/>
      <ListComponent/>
      <ListResourceComponent/>
    </div>
  );
}

export default App;
