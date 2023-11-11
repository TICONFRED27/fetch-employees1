// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import DisplayEmployee from "src/components/DisplayEmployee";
import axios from "axios";
function App() {
  const [employee, setEmployee] = useState(employee);
  const getEmployee = () => {
    // Send the request
    axios
      .get("https://randomuser.me/api?nat=en")
      // Use this data to update the state
      .then((response) => {
        setEmployee(response.data.results[0]);
      });
  };

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
