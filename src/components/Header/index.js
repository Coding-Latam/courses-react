import React from "react";

const Header = () => {
  const changeMode = () => {
    console.log("cambiar modo");
  };

  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__left">
          <div className="header__image">
            <img src="./images/logo.svg" alt="" />
          </div>
          <div className="header__brand">
            <span>Dark Mode</span>
          </div>
        </div>
        <div className="header__right">
          <div className="mode">
            <button onClick={changeMode}>Cambiar modo</button>
          </div>
        </div>
      </div>
      <div className="header__banner"></div>
    </header>
  );
};

export default Header;
