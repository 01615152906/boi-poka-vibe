// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Root from './Components/Root/Root.jsx';
// import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
// import Home from './Components/Home/Home.jsx';
// import Dashboard from './Components/Dashboard/Dashboard.jsx';
// import BookDetail from './Components/BookDetail/BookDetail.jsx';
// import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
// import { ToastContainer, toast } from 'react-toastify';
// // import { Helmet, HelmetProvider } from 'react-helmet-async';

// // import { Helmet } from 'react-helmet';

// // import { HelmetProvider } from 'react-helmet-async';
// import { HelmetProvider } from 'react-helmet-async';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     errorElement: <ErrorPage></ErrorPage>,
//     children:[
//       {
//         path: '/',
//         element: <Home></Home> ,
//       },
//       {
// path: 'books/:bookId',
// element: <BookDetail></BookDetail>,
// loader: () => fetch('/booksData.json') // do not all the books for one book.
//       },
// {
//   path: 'listedBooks',
//   element: <ListedBooks></ListedBooks>,
//           // worst way load some data.
//         loader: () => fetch('/booksData.json')//do not load all for some 
// },

//       {
//         path: 'dashbord',
//         element: <Dashboard></Dashboard>,
//         // // worst way load some data.
//         // loader: () => fetch('/booksData.json')//do not load all for some 
//       }
//     ]
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//      {/* <RouterProvider router={router} />
//       <ToastContainer /> */}
// {/* <HelmetProvider>
// <RouterProvider router={router} />
//       <ToastContainer /> 
// </HelmetProvider> */}
//  {/* <Helmet>
//  <RouterProvider router={router} />
//  <ToastContainer />
//       </Helmet> */}


// <HelmetProvider>
//       <RouterProvider router={router} />
//       <ToastContainer />
//     </HelmetProvider>
//   </StrictMode>,
// );



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import BookDetail from './Components/BookDetail/BookDetail.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  HelmetProvider } from 'react-helmet-async';
// import { Helmet } from 'react-helmet';
// import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'books/:bookId',
        element: <BookDetail />,
        loader: () => fetch('/booksData.json'), 
      },
      {
        path: 'listedBooks',
        element: <ListedBooks />,
        loader: () => fetch('/booksData.json'), 
      },
      {
        path: 'dashboard', 
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>


{/* <RouterProvider router={router} />
<ToastContainer /> */}
<HelmetProvider>
<RouterProvider router={router} />
<ToastContainer />
</HelmetProvider>

  </StrictMode>
);