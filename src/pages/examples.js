import React from 'react'
import Header from '../examples/Header-Hooks'
import HeaderStatic from '../examples/Header-Static'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
const examples = (props) => {

    const {author, title} = props.data.site.siteMetadata
    return (
        <Layout>
            <Header/>
            <HeaderStatic/>
            <div>
                this is our perspectiveOrigin:
                <h4>title: title</h4>
                <h4>author: {author}</h4>
            </div>
        </Layout>
    )
}
export const getData = graphql`
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

export default examples
