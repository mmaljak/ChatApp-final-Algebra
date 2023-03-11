// Import the necessary modules and components
import React, { useState } from "react";

// Define some styles to be used later
const styles = {
  button: {
    width: "10%",
    height: 50,
    fontWeight: "bold",
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: "#34b7f1",
    borderWidth: 0,
    color: "#fff",
  },
  textarea: {
    width: "60%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0,
    padding: 10,
    fontSize: 18,
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
};

/* Defining the InputText component, a form input that allows the user to type a message and send it to the chat. 
 It receives the addMessage function as a prop from its parent component, ChatContainer. 
 When the user clicks the "ENTER" button, the addAMessage function is called, 
 which takes the message state variable (which holds the value of the message typed by the user) and 
 passes it to the addMessage function as an object with a message property. 
 This function then clears the message input field by resetting the message state variable to an empty string. */
export default function InputText({ addMessage }) {
  // Define a state variable for the message that the user types
  const [message, setMessage] = useState("");

  // Function to add the message to the chat
  function addAMessage() {
    // Call the addMessage function passed down as a prop from the ChatContainer component
    addMessage({
      message,
    });
    // Clear the message input field
    setMessage("");
  }

  // Render the component
  return (
    <div style={styles.textContainer}>
      <textarea
        style={styles.textarea}
        rows={6}
        placeholder="Write your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={() => addAMessage()} style={styles.button}>
        ENTER
      </button>
    </div>
  );
}
