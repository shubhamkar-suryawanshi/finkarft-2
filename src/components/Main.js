import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <h1>Welcome to my Simple App</h1>
      <h2>What you wanted to see?</h2>
      <h3>My posts or My comments?</h3>
      <form>
        <label>Choose an option: </label>
        <select id="selector">
          <option value="todos">Todos</option>
          <option value="comments">Comments</option>
        </select>
        <button>
          <Link to={'/grid'}>Submit</Link>
        </button>
      </form>
    </div>
  );
}

export default Main;
