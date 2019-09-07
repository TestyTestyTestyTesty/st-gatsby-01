import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
const getData =  graphql`
    {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
      
    `

const Header = () => {
    const {site:{siteMetadata:info}} = useStaticQuery(getData)

    return (
        <div>
            <h1>author: {info.author}</h1>
            <h2>description: {info.description}</h2>
        </div>
    )
}

export default Header
