import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./../styles/App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome, User!" : "Please Log In"}</h1>
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
    </div>
  );
};

export default App;

