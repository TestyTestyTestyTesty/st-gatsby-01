import React from 'react'
import {grapql, StaticQuery} from 'gatsby'
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
const HeaderStatic = () => {
    return (
        <div>
            <StaticQuery query={getData} render={(data)=>{
                return (
                    <div>
                        <h1>{data.site.siteMetadata.title}</h1>
                    </div>)
            }}/>
        </div>
    )
}

export default HeaderStatic
