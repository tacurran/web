import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import { AuthorName } from './blog-author'

import { pb16, pb32, pb8 } from '../../freestanding/utils/padding.module.css'
import * as styles from './blog-list.module.css'

interface PropTypes {
  title: string
}

type Edge = {
  node: {
    id: string
    frontmatter: {
      publishedAt: string
      author: string
      path: string
      title: string
      teaser: string
      overline: string
    }
  }
}

const BlogList = ({ title }: PropTypes) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/blog/" }
          frontmatter: { published: { ne: false } }
        }
        sort: { fields: [frontmatter___publishedAt], order: DESC }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              seo {
                title
                description
              }
              publishedAt(formatString: "MMMM DD, YYYY")
              author
              path
              title
              teaser
              overline
            }
          }
        }
      }
    }
  `)
  return (
    <div className={cn(styles.blogList)}>
      <Container fluid={true} justify={'center'} alignItems={'start'}>
        <Grid lg={8} md={10} sm={12} xs={12}>
          <Container fluid={true} justify={'center'}>
            <Grid
              lg={8}
              md={10}
              sm={12}
              xs={12}
              className={cn(styles.blogHeading, pb32)}
            >
              <h1 className={'font-h1'}>{title}</h1>
            </Grid>
          </Container>
          <Container>
            {(data.allMdx.edges as Edge[]).map(({ node }) => (
              <Button
                style={'none'}
                to={node.frontmatter.path}
                className={cn(styles.blogItem)}
                key={node.id}
              >
                <Grid lg={6} md={6} sm={12} xs={12}>
                  <div className={cn(pb16)}>
                    <h2 className={cn('font-overline', 'primary', pb16)}>
                      {node.frontmatter.overline}
                    </h2>
                    <h3 className={cn('font-h5', pb8)}>
                      {node.frontmatter.title}
                    </h3>
                    <p className={cn('font-p-xs', 'mute-40')}>
                      <AuthorName
                        className={cn('font-p-xs')}
                        name={node.frontmatter.author}
                      />{' '}
                      - {node.frontmatter.publishedAt}
                    </p>
                  </div>
                </Grid>
                <Grid lg={6} md={6} sm={12} xs={12}>
                  <p className={cn('font-p-sm', 'mute-85')}>
                    {node.frontmatter.teaser} <b>Read more</b>
                  </p>
                </Grid>
              </Button>
            ))}
          </Container>
        </Grid>
      </Container>
    </div>
  )
}

export default BlogList
