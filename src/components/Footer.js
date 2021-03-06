import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          Built by Batya aisman Sufrin {new Date().getFullYear()}          
        </h4>
      </div>
    </footer>
  )
}

export default Footer
