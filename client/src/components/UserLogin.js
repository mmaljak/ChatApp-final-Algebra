// Import the necessary dependencies - React, useState hook from React, CommentOutlined icon from
// the Ant Design library, and the lodash library.
import React, { useState } from "react";
import { CommentOutlined } from "@ant-design/icons";
import _ from "lodash";

// The code defines a button style object.
const button = {
  width: "10%",
  height: 50,
  fontWeight: "bold",
  borderRadius: 10,
  fontSize: 18,
  backgroundColor: "#075e54",
  borderWidth: 0,
  color: "#fff",
  margin: 10,
};

// This is a functional component that accepts a setUser prop. It initializes a user state using the useState hook.
// The handleSetUser function is called when the user clicks the "ENTER" button.
// It first checks if the user state is not empty. If it is empty, the function returns without setting the user.
// If the user has entered a name, the function sets the user using the setUser prop and
// saves the user and an avatar image link to the local storage.
export default function UserLogin({ setUser }) {
  const [user, setAUser] = useState("");

  function handleSetUser() {
    if (!user) return;
    localStorage.setItem("user", user);
    setUser(user);
    localStorage.setItem(
      "avatar",
      `https://picsum.photos/id/${_.random(1, 1000)}/200/300`
    );
  }

  // The component renders a header and a form with an input field and a button.
  // The user state is used as the value of the input field,
  // and the setAUser function is called on every change of the input value.
  //The handleSetUser function is called when the user clicks the "ENTER" button.
  return (
    <div>
      <h1 style={{ margin: 10, textAlign: "center" }}>
        <CommentOutlined color={"green"} /> Algebra Chat{" "}
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{
            margin: 10,
            height: 30,
            width: "25%",
            borderRadius: 10,
            borderWidth: 10,
            fontSize: 18,
          }}
          value={user}
          onChange={(e) => setAUser(e.target.value)}
          placeholder="Write your name"
        ></input>
        <button onClick={() => handleSetUser()} style={button}>
          ENTER
        </button>
      </div>
    </div>
  );
}
