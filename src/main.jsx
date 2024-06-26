import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
// import Home from './pages/Home';

import './index.css'
import { Home } from './pages/Home.jsx';
import ListMatkul from './components/ListMatkul.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        title: "Beranda",
      },
      {
        path: "/list-matkul",
        element: <ListMatkul />,
        title: "Daftar Mata Kuliah",
      },
      {
        path: "/contact",
        element: <Contact />,
        title: "Hubungi Kami",
      },
      {
        path: "/about",
        element: <About />,
        title: "Tentang Kami",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
