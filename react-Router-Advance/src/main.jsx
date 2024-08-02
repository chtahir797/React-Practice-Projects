import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import User from './pages/User.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='user/:userId' element={<User />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
