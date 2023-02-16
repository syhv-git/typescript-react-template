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

const Body = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  min-height: 100vh;
  max-height: fit-content;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`;

export const App: React.FC = () => {
  return (
    <Body >
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </Body>
  );
}
