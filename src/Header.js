import React, { useState, useEffect } from 'react'
import "./Header.css"

function Header() {
    const [show, handleShow] = useState(false);

    useEffect(() => { //for scrolling...
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`header ${show && "header__black"}`}>
            <img className="headerLogo" src="images/logo.JPG" alt="" />
            <img className="headerUserLogo" src="images/userlogo.JPG" alt="" />
        </div>
    )
}

export default Header
