import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ListedBook from './components/ListedBook/ListedBook';
import Root from './components/Root/Root';
import PageToRead from './components/PageToRead/PageToRead';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listedBook',
        element:<ListedBook></ListedBook>,
        loader:()=>fetch('data.json'),
      },
      {
        path:'/pagesToRead',
        element:<PageToRead></PageToRead>
      },
      {
        path:'/bookDetails/:id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('data.json'),
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='px-28'><RouterProvider router={router} /></div>
  </StrictMode>,
)
