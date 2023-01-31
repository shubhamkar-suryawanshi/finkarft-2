import React from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function Table() {
  const columnDefs = [
    {
      headerName: 'Sr. No.',
      field: 'id',
      flex: 1,
    },
    {
      headerName: 'Title',
      field: 'title',
      flex: 3,
    },
    {
      headerName: 'Completed',
      field: 'completed',
      flex: 2,
    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
  };

  function onGridReady(params) {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((res) => {
        params.api.applyTransaction({ add: res });
      });
  }

  return (
    <React.Fragment>
      <div className="tableComp">
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
    </React.Fragment>
  );
}

export default Table;
