import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { Landing } from "./Pages/Landing/Landing";
import { Products } from "./Pages/Products/Products";
import { FAQ } from "./Pages/FAQ/FAQ";
import { Loading } from "./Pages/Loading/Loading";
import styled from "styled-components";

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'FAQs',
        element: <FAQ />,
      }]
  },
])

const appStyle = styled.div`
  display: flex;
`;

export const App: React.FC = () => {
  return (
    <div className="App" >
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </div>
  );
}
