import React from 'react';
import './App.css';
import UserComponent from "./components/UserComponent";
import ResourceComponent from "./components/ResourceComponent";
import ListComponent from "./components/ListComponent";
import ListResourceComponent from "./components/ListResourceComponent";
import CreateComponent from "./components/CreateComponent";
import UpdateComponent from "./components/UpdateComponent";
import DeleteComponent from "./components/DeleteComponent";


function App() {
  return (
    <div className="App">
      {/*<UserComponent/>*/}
      {/*<ResourceComponent/>*/}
      {/*<ListComponent/>*/}
      {/*<ListResourceComponent/>*/}
      <CreateComponent/>
      <UpdateComponent method={"PUT"}/>
      <UpdateComponent method={"PATCH"}/>
      <DeleteComponent/>
    </div>
  );
}

export default App;
