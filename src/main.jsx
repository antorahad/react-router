import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About';
import Users from './components/Users';
import Contact from './components/Contact';
import Userdetails from './components/Userdetails.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Header></Header>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/users",
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Users></Users>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/users/:id",
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
          element: <Userdetails></Userdetails>
        }
      ], 
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
