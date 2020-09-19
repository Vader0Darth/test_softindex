import React, { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./Components/Table";
import { Form } from "./Components/Form";
import model from "./Model/Model";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Table />
      </header>
    </div>
  );
}

export default App;
