import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Table from './components/Table';
import Comments from './components/Comments';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/grid',
    element: <Table />,
  },
  {
    path: '/comments',
    element: <Comments />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
