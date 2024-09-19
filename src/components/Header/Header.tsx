import React from "react";
import "./header.css";
import { CgAdidas } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { GrFavorite } from "react-icons/gr";
import { FaBagShopping } from "react-icons/fa6";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const { product } = useSelector((s: any) => s.adidas);
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
              <Link to="/basket">
                <FaBagShopping style={{ fontSize: "22px", color: "white" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="hero">
        <div className="s"></div>
        <div className="container">
          <div className="hero">
            <Card className="bask" sx={{ width: "200px" }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: "220px" }}
                  component="img"
                  height="140"
                  image="https://wwd.com/wp-content/uploads/2021/11/AP19130797952456.jpg?crop=0px%2C625px%2C2102px%2C1177px&resize=1000%2C563"
                  alt="green iguana"
                />
                <h4 style={{ paddingLeft: "20px" }}>JORADN</h4>
              </CardActionArea>
              <CardActions>
                <button style={{ paddingLeft: "10px" }}>ImpressiveFive</button>
              </CardActions>
            </Card>
            <Card className="bask" sx={{ width: "200px" }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: "220px" }}
                  component="img"
                  height="140"
                  image="https://wwd.com/wp-content/uploads/2021/11/AP19130797952456.jpg?crop=0px%2C625px%2C2102px%2C1177px&resize=1000%2C563"
                  alt="green iguana"
                />
                <h4 style={{ paddingLeft: "20px" }}>JORADN</h4>
              </CardActionArea>
              <CardActions>
                <button style={{ paddingLeft: "10px" }}>ImpressiveFive</button>
              </CardActions>
            </Card>
            <Card className="bask" sx={{ width: "200px" }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: "220px" }}
                  component="img"
                  height="140"
                  image="https://wwd.com/wp-content/uploads/2021/11/AP19130797952456.jpg?crop=0px%2C625px%2C2102px%2C1177px&resize=1000%2C563"
                  alt="green iguana"
                />
                <h4 style={{ paddingLeft: "20px" }}>JORADN</h4>
              </CardActionArea>
              <CardActions>
                <button style={{ paddingLeft: "10px" }}>ImpressiveFive</button>
              </CardActions>
            </Card>
            <h1
              style={{
                color: "white",
                position: "absolute",
                right: "120px",
                bottom: "440px",
              }}
            >
              В сайте есть целых ({product.length}) товаров
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
