import React, { useState } from 'react';

import Search from './components/search'


function App() {
  const [state, setState] = useState ({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=trilogy";

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });

    console.log(state.s);
  }



  return (
    <div className="App">
      <header>
      <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} />
      </main>
    </div>
  );
}

export default App;
