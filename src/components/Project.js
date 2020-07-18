import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ title, desc, github, stack, url, image }) => {
  return (
    <article className="project">
      <Image fluid={ image.childImageSharp.fluid } className="project-img"/>
      <div className="project-info">
        <h3>{ title }</h3>
        <p className="project-desc">{ desc }</p>
        <div className="project-stack">
          {
            stack.map(item => <span key={ item.id }>{ item.title }</span>)
          }
        </div>
        <div className="project-links">
          <a href={ github }>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={ url }>
            <FaShareSquare className= "project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
