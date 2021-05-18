import React from 'react';
import './App.css';
import GitHubUserSummary from "./component/GitHubUserSummary";

function App() {
  return (
    <div className="App">
      <GitHubUserSummary />
    </div>
  );
}

export default App;


// everything is user lookup - state: username (pass down as prop)

// next biggest is user summary - api calls happen here state: api results for user info, api results for user repo array (pass down as prop)

// smallest is solo repo component 