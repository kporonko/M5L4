import React from 'react';
import './App.css';
import UserComponent from "./components/UserComponent";
import {IUserData} from "./interfaces/IUserData";
import {getUser, getUsersList} from "./Queries/queries";


function App() {
  return (
    <div className="App">
      <UserComponent/>
    </div>
  );
}

export default App;
