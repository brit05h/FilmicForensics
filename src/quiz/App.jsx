// App.jsx
import React from 'react';
import Quiz from './Quiz'; // Import the Quiz component

const App = () => {
  return (
    <div>
      <h1>Filmic Forensics quiz page</h1> 
      <Quiz />  
    </div>
  );
};// this is just the header and the Quiz part is useful because it renders the Quiz component within this App.jsx meaning it is rendered without any children

export default App;



