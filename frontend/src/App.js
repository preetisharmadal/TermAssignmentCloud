import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateForm from './pages/CreateForm/CreateForm';
import EditSaleForm from './pages/EditSaleForm/EditSaleForm';
import LandingPage from './pages/LandingPage/LandingPage';
import LayoutWithNav from './pages/Layout/LayoutWithNav';
import LayoutWithoutNav from './pages/Layout/LayoutWithoutNav';
import Login from './pages/Login/Login';
import SalePage from './pages/SalePage/SalePage';
import SignUp from './pages/SignUp/SignUp';

const router = createBrowserRouter([
  {
    element: <LayoutWithNav />,
    children: [
      {
        // Change this path back to the Admin page
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/sales/createform",
        element: <CreateForm />
      },
      {
        path: "/sales/:sales_id/edit",
        element: <EditSaleForm />
      },
      {
        path: "/sales/:sales_id",
        element: <SalePage />
      },

    ]
  },
  {
    element: <LayoutWithoutNav />,
    children: [
      {
        path: "/user/login",
        element: <Login />
      },
      {
        path: "/user/signup",
        element: <SignUp />
      },



    ]
  }

]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
