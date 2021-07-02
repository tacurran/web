import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts/layout/layout'
import SEO from '../components/layouts/seo/seo'
import BlogSection from '../components/blog-section'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import BlogHero from '../components/blog-hero'

export default function PageTemplate(props: any) {
  const { mdx } = props.data // data.mdx holds our post data
  const { frontmatter: fn, body } = mdx

  return (
    <Layout>
      <SEO
        description={fn.seo?.description || fn.description}
        title={fn.seo?.title || fn.title}
        keywords={fn.seo?.keywords || ''}
        canonical={fn.seo?.canonical}
      />
      <BlogHero
        title={fn.title}
        author={fn.location}
        subtitle={fn.description}
        date={fn.lastUpdatedAt && `Last updated at ${fn.lastUpdatedAt}`}
      />
      <BlogSection alt={false}>
        <MDXRenderer>{body}</MDXRenderer>
      </BlogSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        description
        location
        seo {
          title
          description
          keywords
          canonical
        }
        lastUpdatedAt
      }
    }
  }
`
