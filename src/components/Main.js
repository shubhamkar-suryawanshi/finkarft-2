import React, { useState } from 'react';

function Main() {
  const [selectValue, setSelectValue] = useState();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function redirectTo() {
    window.location.href = `${selectValue}`;
  }

  return (
    <div className="App">
      <h1>Simple App</h1>
      <h3>What you want to see?</h3>
      <h3>My Todos or My Comments?</h3>
      <form onSubmit={handleSubmit} className="form">
        <select
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
        >
          <option value="/">Choose your option</option>
          <option value="/grid">Todos</option>
          <option value="/comments">Comments</option>
        </select>
        <button type="submit" onClick={redirectTo}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Main;
