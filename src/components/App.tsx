import React from 'react';
import HomePage from './routes/home/HomePage';
import settings from '../../settings';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';


export default function App() {

const router = createHashRouter([
  {
    path: "/*",
    element: <HomePage />,
  }
]);
  return (
    <RouterProvider router={router} />
  );
}
