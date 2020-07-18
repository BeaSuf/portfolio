import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects'
import SEO from '../components/SEO'

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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

export default ({data}) => {
  const { allStrapiProjects:{nodes:projects} } = data;
  
  return (    
    <Layout>
      <SEO title="Home" description="This is a home page"/>
      <Hero />
      <Jobs />
      <Projects projects={ projects } title="featured projects" showLink />      
    </Layout>    
  );
};

