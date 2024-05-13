import React, { useState } from 'react'
import { TbMenuDeep } from "react-icons/tb";
import "./Header.css"
const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const getMenuStyle = (menuOpen)=>{
    if(document.documentElement.clientWidth <= 800){

      return {right : !menuOpen && "-100%"};

};
  }
  return (
    <>
     <section className="h-warpper">
        <div className="  paddings innerWidth h-container">
            <img src="./logo.png" alt="logo" />

            <div className=" flexCenter h-menu" style={getMenuStyle(menuOpen)}>


                <a href="">Residencies</a>
                <a href="">Our Value </a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                   <button className="button">
                   <a href="">Contact</a>
                   </button>
                
            </div>
            <div className="menu-icon" onClick={() =>setMenuOpen ((prev) => !prev)}>
        <TbMenuDeep size={30} />
        </div>
        </div>

       
     </section>
    </>
  )
}

export default Header

