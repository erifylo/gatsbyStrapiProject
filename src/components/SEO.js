import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        siteUrl
        image
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDescription,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle} `}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      {/* twitter cards from config*/}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:creator" content={twitterUsername}/>
      <meta name="twitter:title" content={siteTitle}/>
      <meta name="twitter:description" content={siteDescription}/>
      <meta name="twitter:image" content={`${siteUrl}${image}`}/>
      {/* Linkedin Card */}
      <meta name="image" property="og:image" content={`${siteUrl}${image}`}></meta>
    </Helmet>
  )
}

export default SEO
