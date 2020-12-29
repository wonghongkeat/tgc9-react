import React from "react";
import Alert from "./Alert";

export default function App() {
  return (
    <div className="App">
      <Alert message="Hello World" textColor="green" bgColor="darkseagreen" />
      <Alert message="Danger danger" textColor="red" bgColor="pink" />
      <Alert message="File uploaded" textColor="yellow" bgColor="gold" />
    </div>
  );
}
