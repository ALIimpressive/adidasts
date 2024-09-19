import React from "react";
import { CgAdidas } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./basket.css";
import { Product } from "../../types";
import { AiOutlineJava } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { addDeleteBass } from "../../app/slices";

const ProductBasket: React.FC = () => {
  const dispatch = useDispatch()
  const { basket } = useSelector((s: any) => s.adidas);
  console.log("basket", basket);

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
      <div id="basket">
        <div className="container">
          <div style={{ padding: "150px 0" }} className="basket">
            {basket.map((el: Product, idx: number) => (
              <div key={idx} className="card">
                <div className="card-img">
                  <img src={el.image} alt="" />
                </div>
                <div className="card-text">
                  <h4>Nmae: {el.name}</h4>
                  <h4>Type: {el.type}</h4>
                  <h4>Price: {el.price}$</h4>
                </div>
                <div className="card-icon">
                  <AiOutlineJava style={{ fontSize: "25px" }} />
                  <button
                    onClick={() => dispatch(addDeleteBass(el.id))}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MdOutlineDelete style={{ fontSize: "20px" }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBasket;
