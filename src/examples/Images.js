import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import img from "../images/bkg.jpg"
import Image from 'gatsby-image'

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "img1.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "bkg.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    example: file(relativePath: {eq: "img5.jpg"}) {
        childImageSharp {
          fluid(maxWidth:100){
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `

const Images = () => {
  const data = useStaticQuery(getImages);

  return <section className="images">
      <article className="single-image"><h3>basic image</h3>
      <img src={img} width="100%" alt="basic"/>
      <h2>Content Basic</h2>
      </article> 

      <article className="single-image"><h3>fixed image/blur</h3>
      <Image fixed={data.fixed.childImageSharp.fixed} />
      <h2>Content Fixed/Blur</h2>
      </article> 

      <article className="single-image"><h3> fluid image/svg</h3>
      <Image fluid={data.fluid.childImageSharp.fluid}/>
      <h3>test image</h3>
      </article>
      <div className="small">
      <Image fluid={data.fluid.childImageSharp.fluid}/>
      <h2>Content</h2>
      </div>
      <article>
      <Image fluid={data.example.childImageSharp.flud}/>
     </article> 
</section>
  
    
  }

export default Images

