import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({ data }) => {
  const { allStrapiProjects: { nodes: projects } } = data;
  console.log(data);

  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects projects={ projects } title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        desc
        featured
        github
        stack {
          id
          title
        }
        strapiId
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
