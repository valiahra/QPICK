import { useState } from "react";
import "./App.css";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BasketPage from "./pages/BasketPage/BasketPage";
import productsQ from "../products";
import Contacts from "./pages/Contacts/Contacts";
import Favorites from "./pages/Favorites/Favorites";
import Footer from "./widgets/Footer";

function App() {
  const [products, setProducts] = useState(productsQ);
  const [items, setItems] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root items={items} setItems={setItems} />,
      children: [
        {
          path: "/",
          element: (
            <HomePage
              items={items}
              products={products}
              setProducts={setProducts}
              setItems={setItems}
            />
          ),
        },
        {
          path: "/basket",
          element: <BasketPage items={items} setItems={setItems} />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);

  // return <RouterProvider router={router} />;
  return (
    <>
      <RouterProvider router={router} />
      <Footer /> 
    </>
  );
}

export default App;
