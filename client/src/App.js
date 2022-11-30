import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import Products from "./pages/products/products";
import "./app.scss";
import { useRef } from "react";

const Layout = () => {
  
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
 

  return (
    <div className="app">
      <Navbar aboutRef={aboutRef} contactRef={contactRef}/>
      <Outlet/>
      <Footer aboutRef={aboutRef} contactRef={contactRef}/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    ]
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
