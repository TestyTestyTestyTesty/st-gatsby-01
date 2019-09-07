import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import img  from '../images/image-1.jpg'
import Img from 'gatsby-image'
const getImages =  graphql`
{
    fixed:file(relativePath:{eq:"image-2.jpg"}) {
      childImageSharp {
        fixed(width:350){
            ...GatsbyImageSharpFixed
        }
      }
    }
    fluid:file(relativePath:{eq:"image-3.jpg"}) {
      childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
      
    `
const Images = () => {
    const data = useStaticQuery(getImages);
    return (
        <Wrapper>
            <article>
                <h3>basic image</h3>
                <img src={img} className="basic"/>
                <span>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet </span>
            </article>
            <article>
                <h3>fixed image/blur</h3>
                <Img fixed={data.fixed.childImageSharp.fixed}/>
                <span>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet </span>
            </article>
            <article>
                <h3>fluid image/svg</h3>
                <Img fluid={data.fluid.childImageSharp.fluid}/>
                <span>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet </span>
            </article>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    text-align:center;
    text-transform: capitalize;
    width:80vw;
    margin:0 auto 10rem;
    .basic{
        width:100%;
    }
    article{
        border:3px solid red;
        padding:1rem 0;
    }
    @media(min-width:992px){
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap:1rem;
    }
`
export default Images
