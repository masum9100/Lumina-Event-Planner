import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Route/myRoute'
import AuthProvider from './Hook/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
