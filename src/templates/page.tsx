import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

import MDXBody from '../components/layouts/MDXbody/mdx-body'
import BlogHero from '../components/layouts/blog/blog-hero'
import Layout from '../components/layouts/layout/layout'
import SEO from '../components/layouts/seo/seo'

export default function PageTemplate(props: any) {
  const { mdx } = props.data // data.mdx holds our post data
  const { frontmatter: fn, body } = mdx

  return (
    <Layout>
      <SEO description={fn.metaDescription || ''} title={fn.metaTitle} />
      <BlogHero
        title={fn.title}
        author={fn.author}
        date={fn.lastUpdatedAt && `Last updated at ${fn.lastUpdatedAt}`}
      />
      <MDXBody padded={false}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXBody>
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
        metaTitle
        metaDescription
        lastUpdatedAt
      }
    }
  }
`
