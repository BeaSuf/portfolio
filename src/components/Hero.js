import React from "react"
//import Image from "gatsby-image"
import { Link } from "gatsby"
//import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
           <section>             
              <h4>Hi, my name is</h4>
              <h1>Batya Aisman Sufrin</h1>
              <h4>Software Developer</h4>
              <Link to='/contact' className="btn">
                contact me
              </Link>
              <SocialLinks />
           </section>
        </article>
      </div>
    </header>
  )
}

export default Hero
