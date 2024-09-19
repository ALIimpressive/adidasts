import React, { useState } from "react";
import { CgAdidas } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEdit } from "../../app/slices";

const EditProduct: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { product } = useSelector((s: any) => s.adidas);

  const Editing = product.find((el: any) => el.id === Number(id));

  const [values, setValues] = useState(Editing);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof typeof Editing
  ) => {
    setValues({
      ...values,
      [key]: e.target.value,
    });
  };

  const handleEditProduct = () => {
    dispatch(addEdit(values));
    navigate("/");
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
            <h1>EDIT PRODUCT</h1>
            <input
              onChange={(e) => handleChange(e, "name")}
              type="text"
              placeholder="Name"
              value={values?.name || ""}
            />
            <input
              onChange={(e) => handleChange(e, "type")}
              type="text"
              placeholder="Type"
              value={values?.type || ""}
            />
            <input
              onChange={(e) => handleChange(e, "price")}
              type="text"
              placeholder="Price"
              value={values?.price || ""}
            />
            <input
              onChange={(e) => handleChange(e, "image")}
              type="text"
              placeholder="IMG url"
              value={values?.image || ""}
            />
            <button
              onClick={handleEditProduct}
              disabled={
                !values?.name ||
                !values?.type ||
                !values?.price ||
                !values?.image
              }
            >
              EDIT PRODUCT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
