import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import BookDetail from './Components/BookDetail/BookDetail.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import { ToastContainer, toast } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home> ,
      },
      {
path: 'books/:bookId',
element: <BookDetail></BookDetail>,
loader: () => fetch('/booksData.json') // do not all the books for one book.
      },
{
  path: 'listedBooks',
  element: <ListedBooks></ListedBooks>,
          // worst way load some data.
        loader: () => fetch('/booksData.json')//do not load all for some 
},

      {
        path: 'dashbord',
        element: <Dashboard></Dashboard>,
        // // worst way load some data.
        // loader: () => fetch('/booksData.json')//do not load all for some 
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     <RouterProvider router={router} />
      <ToastContainer />
  </StrictMode>,
)
