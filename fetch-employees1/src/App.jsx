import React from "react";
import "./App.css";
import DisplayEmployee from "./components/DisplayEmployee";

function App() {
  const sampleEmployee = {
    gender: "male",
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    location: {
      street: {
        number: 761,
        name: "Tay Street",
      },
      city: "Timaru",
      postcode: 76111,
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  };
  return (
    <div className="App">
      <DisplayEmployee employee={sampleEmployee} />
    </div>
  );
}

export default App;
