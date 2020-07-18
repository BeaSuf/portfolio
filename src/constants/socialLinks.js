import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
  FaEnvelopeSquare
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "http://www.linkedin.com/in/batya-aisman-sufrin",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/BeaSuf",
  },
  {
    id: 3,
    icon: <FaEnvelopeSquare className="social-icon"></FaEnvelopeSquare>,
    url: "mailto:subatyais@gmail.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
