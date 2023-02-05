import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Main() {
  const [selectValue, setSelectValue] = useState('todos');
  const [path, setPath] = useState('/grid');

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(selectValue);
    if (selectValue === 'todos') setPath('/grid');
    else setPath('/comments');
  }

  return (
    <div className="App">
      <h1>Welcome to my Simple App</h1>
      <h2>What you wanted to see?</h2>
      <h3>My posts or My comments?</h3>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Choose an option:
          <select
            value={selectValue}
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
          >
            <option value="todos">Todos</option>
            <option value="comments">Comments</option>
          </select>
        </label>
        <button type="submit">
          <Link to={path}>Submit</Link>
        </button>
      </form>
    </div>
  );
}

export default Main;
