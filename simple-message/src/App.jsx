import React from 'react';
function App() {
  // const message = "JavaScript is so cool.";
  const [message, setMessage] = React.useState("JavaScript is so cool.");
  return <h1>{message}</h1>;
  }

export default App;