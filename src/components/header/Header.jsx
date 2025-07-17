import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.avif";
const Header = () => {
  return (
    <header className="border-b-[1px] border-[#ddd] shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-[20px]  ">
        <div>
          <NavLink to={"/"}>
            <img className="block w-[80px]" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="flex items-center gap-[30px]">
          <NavLink to={"/comments"}>Comments</NavLink>
          <NavLink to={"/albums"}>Albums</NavLink>
          <NavLink to={"/todos"}>Todos</NavLink>
          <NavLink to={"/users"}>Users</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
