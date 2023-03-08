import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  function getNames() {
    document.querySelector("span").innerHTML = `${name} ${lastName}`;
  }

  const handleClick = () => {
    if (!name || !lastName) alert("Fill in name and lastname");

    alert("Registration done successfully");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <span></span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "500px",
          height: "500px",
          background: "#cccddd",
        }}
      >
        <p>Learning tests to react</p>

        <input
          style={{ marginBottom: "15px" }}
          aria-label="name-input"
          placeholder="Name"
          type="text"
          value={name}
          onChange={handleChangeName}
        />

        <input
          style={{ marginBottom: "15px" }}
          aria-label="lastName-input"
          placeholder="Last Name"
          type="text"
          value={lastName}
          onChange={handleChangeLastName}
        />

        <button aria-label="register-button" onClick={handleClick}>
          Register
        </button>
      </div>
    </div>
  );
};

export default App;
