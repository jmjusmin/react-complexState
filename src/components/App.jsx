import React, { useState } from "react";

function App() {
  // const [fname, setfName] = useState("");
  // const [lname, setlName] = useState("");
  // function handleFname(e) {
  //   setfName(e.target.value);
  // }
  // function handleLname(e) {
  //   setlName(e.target.value);
  // }

  //use useState to store an object
  const [fullName, setName] = useState({
    fName: "",
    lName: ""
  });

  function updateName(e) {
    // const newValue = e.target.value;
    // const inputName = e.target.name;

    //we could use an object destructuring
    const { value, name } = e.target;

    setName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={updateName}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={updateName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
