import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function Comments() {
  const columnDefs = [
    {
      headerName: 'Sr. No.',
      field: 'id',
      flex: 1,
    },
    {
      headerName: 'Heading',
      field: 'name',
      flex: 3,
    },
    {
      headerName: 'Email',
      field: 'email',
      flex: 3,
    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
  };

  function onGridReady(params) {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((res) => {
        params.api.applyTransaction({ add: res });
      });
  }

  return (
    <div className="tableComp" style={{ boxSizing: 'border-box' }}>
      <div
        className="ag-theme-alpine"
        style={{ width: '100vw', height: '100vh' }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
}

export default Comments;
