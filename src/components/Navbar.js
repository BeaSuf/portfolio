import React from "react"
import logo from "../assets/logo_size1.jpg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <section className="nav-center">
        <header className="nav-header">          
          <img src={ logo } alt="logo"/>          
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </header>
        <PageLinks styleClass="nav-links"> </PageLinks>
      </section>
    </nav>      
  )
}

export default Navbar
