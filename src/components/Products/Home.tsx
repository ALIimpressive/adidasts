import React, { useState } from "react";
import Header from "../Header/Header";
import "./product.css";
import { MdOutlineAddShoppingCart, MdOutlineDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineJava } from "react-icons/ai";
import Footer from "../Footer/Footer";
import { addBasket, addDelete, addFavorite } from "../../app/slices";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import { useAppSelector } from "../../app/store";
import { useDispatch } from "react-redux";
import { FcLike } from "react-icons/fc";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(false);

  const { product } = useAppSelector((s) => s.adidas);

  const handleAddBasket = (id: number) => {
    const product1 = product.find((el) => el.id === id);
    dispatch(addBasket(product1!));
  };

  const handleAddFavorite = (id: number) => {
    const product1 = product.find((el) => el.id === id);
    const product2 = product.some((el) => el.id === id);
    dispatch(addFavorite(product1!));
    if (!favorites) {
      setFavorites(true);
    } else {
      setFavorites(false);
    }
  };

  return (
    <div>
      <Header />
      <div id="home">
        <div className="container">
          <h1
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 100,
              margin: "20px",
            }}
          >
            PRODUCT IS ADIDAS
          </h1>
          <div className="home">
            {product.map((el, idx) => (
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
                    onClick={() => dispatch(addDelete(el.id))}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MdOutlineDelete style={{ fontSize: "20px" }} />
                  </button>
                  <button onClick={() => navigate(`/edit/${el.id}`)}>
                    <TiEdit
                      style={{
                        fontSize: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </button>
                  <button
                    onClick={() => handleAddBasket(el.id)}
                    style={{
                      fontSize: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MdOutlineAddShoppingCart style={{ fontSize: "20px" }} />
                  </button>
                  <button
                    onClick={() => {
                      handleAddFavorite(el.id);
                    }}
                  >
                    {favorites ? (
                      <FcLike style={{ fontSize: "23px" }} />
                    ) : (
                      <GrFavorite style={{ fontSize: "20px" }} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
            background: "#ffffff30",
            height: "40px",
          }}
          count={10}
          color="primary"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
