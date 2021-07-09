import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

import BlogSection from '../components/blog-section'
import Layout from '../components/layouts/layout/layout'
import SEO from '../components/layouts/seo/seo'

export default function PageTemplate(props: any) {
  const { mdx } = props.data // data.mdx holds our post data
  const { frontmatter: fn, body } = mdx

  return (
    <Layout>
      <SEO
        description={fn.seo?.description || fn.description}
        title={fn.seo?.title || fn.title}
        keywords={fn.seo?.keywords || ''}
      />
      <BlogSection padded={true}>
        <MDXRenderer>{body}</MDXRenderer>
      </BlogSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        description
        position
        location
        seo {
          title
          description
          keywords
        }
      }
    }
  }
`
