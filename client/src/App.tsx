// https://demos.creative-tim.com/argon-dashboard-pro-material-ui/?_ga=2.245836685.802098311.1691521800-628925500.1691521800#/authentication/sign-in/basic

import React from "react";
import "./App.css";
import SignUp from "./components/layouts/authentication/sign-up/SignUp";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#080518",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignUp />
    </div>
  );
}

export default App;
