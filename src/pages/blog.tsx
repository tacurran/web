import React from 'react'

import BlogList from '../components/layouts/blog/blog-list'
import Layout from '../components/layouts/layout/layout'
import SEO from '../components/layouts/seo/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title={'Ory Developer Blog and Articles'}
        description={
          'Read articles and blog posts from Ory core contributors and maintainers.'
        }
      />
      <BlogList title={'Developer Blog & Articles'} />
    </Layout>
  )
}

export default IndexPage
