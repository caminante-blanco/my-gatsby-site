import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <StaticImage
        alt='The gatsby corporate logo'
        src='../images/icon.png'
      />
      <p>I'm making this with the tutroial</p>
    </Layout>
  )
}
export default IndexPage