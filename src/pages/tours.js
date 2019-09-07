import React from 'react'
import Layout from '../components/Layout'
import Tours from '../components/Tours/Tours'
import {graphql} from 'gatsby'
const tours = ({data}) => {
    return (
        <Layout>
           <Tours tours={data.tours.edges}/> 
        </Layout>
    )
}
export const getTours =graphql`
query{
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          key: contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
  
`
export default tours