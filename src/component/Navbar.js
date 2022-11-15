import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLight } from "../utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLight = useSelector((state) => state.isLight);
  const dispatch = useDispatch();
  const NavStyle = {
    border: "2px solid gray",
    padding: "1rem",
    color: "Blue",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <div style={NavStyle}>
      <div>Geekster</div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/service">Services</Link>

      <button
        onClick={() => {
          const message = `Clicked or Changed to ${isLight ? "Dark" : "Light"}`;
          dispatch(setIsLight(message));
        }}
      >
        Toggle Theme to {isLight ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Navbar;
