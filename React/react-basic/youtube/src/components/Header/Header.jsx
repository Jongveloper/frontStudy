import React from 'react';
import './Header.css';
function Header() {
  return (
    <>
      <header>
        <img src="images/logo.png" alt="로고" />
        <p className="headerText">YouTube</p>
        <form className="searchWrap">
          <input className="search" placeholder="검색어를 입력하세요" />
          <img className="searchLogo" src="images/search.png" alt="검색"></img>
        </form>
      </header>
    </>
  );
}

export default Header;
