import React, { useState } from "react";
import UserContext from "./context/UserContext";
import Profile from "./components/Profile";
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // State for storing user info

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password }); // Save user info in state
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="username"
        />
        <input
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
