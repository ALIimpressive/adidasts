import React from "react";
import Home from "../components/Products/Home";
import Admin from "../components/Admin/Admin";
import { Route, Routes } from "react-router-dom";
import EditProduct from "../components/Edits/EditProduct";
import ProductBasket from "../components/Baskets/ProductBasket";

const MainRoutes: React.FC = () => {
  const PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/admin", element: <Admin />, id: 2 },
    { link: "/edit/:id", element: <EditProduct />, id: 3 },
    { link: "/basket", element: <ProductBasket />, id: 4 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
