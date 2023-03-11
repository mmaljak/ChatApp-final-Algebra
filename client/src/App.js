// This imports a component named ChatContainer from a file named ChatContainer.js located in the components folder.
import ChatContainer from "./components/ChatContainer";

// This function named App is the entry point of the application
function App() {
  // This returns a div element with a background color, height, 
  //and padding properties and renders the ChatContainer component inside it
  return (
    <div style={{ backgroundColor: "#ece5dd", height: "100vh" , padding:10}}>
      <ChatContainer/>
    </div>
  );
}

// This exports the App function as the default export of this module
export default App;