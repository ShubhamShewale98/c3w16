import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
//  console.log(token)
  return (
    <>
      <nav style={{backgroundColor:"lightgreen",display:"grid",gridTemplateColumns:" 100px 100px 100px 100px",gpa:"20px",textAlign:"center"}}>
        {/* keep all the NavLinks here */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/login">Login</NavLink>

    

      </nav>
    </>
  );
};
