// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import DisplayEmployee from "./components/DisplayEmployee";
function App() {
  const [employee, setEmployee] = useState();
  const getEmployee = () => {
    // Send the request
    axios
      .get("https://randomuser.me/api?nat=en")
      // Use this data to update the state
      .then((response) => {
        console.log("response fetch", response);
        setEmployee(response.data.results[0]);
      });
  };
  console.log("state", employee);
  return (
    <div className="App">
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

export default App;
