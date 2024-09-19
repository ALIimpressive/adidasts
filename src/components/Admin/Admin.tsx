import React, { useState } from "react";
import "./admin.css";
import { CgAdidas } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/slices";

const Admin: React.FC = () => {
  interface Product {
    name: string;
    type: string;
    price: number;
    image: string;
    id: number;
  }

  const [values, setValues] = useState<Product>({
    name: "",
    type: "",
    price: 0,
    image: "",
    id: Date.now(),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof Product
  ) => {
    setValues({ ...values, [key]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(values));
    setValues({
      name: "",
      type: "",
      price: 0,
      image: "",
      id: Date.now(),
    });
  };

  return (
    <div>
      <div id="header">
        <div className="hed-text">
          <h4>FREE MY PROJECT IS NOBODY PERFECT</h4>
        </div>
        <div className="container">
          <div className="header">
            <div className="hed-icon">
              <CgAdidas style={{ color: "white" }} />
            </div>
            <div className="hed-tex">
              <Link to="/admin">
                <a href="">ADMIN</a>
              </Link>
              <Link to="/">
                <a href="">MENU</a>
              </Link>
              <a href="">MEN</a>
              <a href="">WOMEN</a>
              <a href="">KIDS</a>
              <a href="">SALE</a>
              <a href="">STRIPE</a>
            </div>
            <div className="hed-input">
              <input type="text" placeholder="Search" />
              <IoSearchSharp
                style={{ position: "absolute", fontSize: "22px" }}
              />
              <SlPeople style={{ fontSize: "22px", color: "white" }} />
              <GrFavorite style={{ fontSize: "22px", color: "white" }} />
              <FaBagShopping style={{ fontSize: "22px", color: "white" }} />
            </div>
          </div>
        </div>
      </div>
      <div id="admin">
        <div className="container">
          <div className="admin">
            <h1>ADD PRODUCT</h1>
            <input
              onChange={(e) => handleChange(e, "name")}
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(e) => handleChange(e, "type")}
              type="text"
              placeholder="Type"
            />
            <input
              onChange={(e) => handleChange(e, "price")}
              type="text"
              placeholder="Price"
            />
            <input
              onChange={(e) => handleChange(e, "image")}
              type="text"
              placeholder="IMG url"
            />
            <button onClick={handleAddProduct}>ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
