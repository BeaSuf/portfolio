import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        desc {
          id
          title
        }
        position
        strapiId
      }
    }
  }
`
const Jobs = () => {
  const data = useStaticQuery(query);
  const { allStrapiJobs: { nodes: jobs } } = data;
  
  const [value, setValue] = useState(0);
  const { company, position, date, desc } = jobs[value];
  
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container*/}
        <div className="btn-container">
          {
            jobs.map((job, i) => {
              return (
                <button 
                  key={job.strapiId} 
                  onClick={() => setValue(i)}
                  className={`job-btn ${i === value && 'active-btn'}`}
                >
                  {job.company}
                </button> 
              ) 
            })
          }
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{ position } <span className="job-company">@ {company} </span></h3>
          <p className="job-date">{ date }</p>
          {
            desc.map(item => {
              return (
                <div key={item.id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{ item.title }</p>
                </div>
              )
            })
          }
        </article>
      </div>
      {/* <Link to="/about" className="btn center-btn">
        more info
      </Link> */}
    </section>
  )
}

export default Jobs
