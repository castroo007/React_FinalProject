import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <NavBar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Find you Book</h2>
          <p className="header-text fs-18 fw-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
            distinctio architecto tempore assumenda quaerat quis enim facere
            magnam quibusdam, doloribus voluptas, molestias cum amet ea iste.
            Quod iusto quis vitae?
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
