import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import cn from 'classnames'
import * as styles from './jobs-list.module.css'
import Button from '../../freestanding/button/button'

type Edge = {
  node: {
    id: string
    frontmatter: {
      title: string
      path: string
      description: string
      location: string
    }
  }
}

const JobsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/jobs/" }
          frontmatter: { published: { ne: false } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              description
              location
            }
          }
        }
      }
    }
  `)

  const posts = (data.allMdx.edges as Edge[]).map(({ node }) => node)
  return (
    <div className={cn(styles.blogSummary)}>
      <div className="container-fluid">
        <div className={cn('row')}>
          <div
            className={cn(
              'col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10',
              styles.blogRow
            )}
          >
            {posts.map(
              ({ id, frontmatter: { title, path, description, location } }) => (
                <Button
                  style={'none'}
                  key={id}
                  to={path}
                  className={cn(styles.blogBox)}
                >
                  <h3 className={cn('col-lg-offset-1 col-lg-10')}>{title}</h3>
                  <p className={cn('col-lg-offset-1 col-lg-10', 'secondary')}>
                    {description}
                  </p>
                  <p className={cn('col-lg-offset-1 col-lg-10', 'secondary')}>
                    {location}
                  </p>
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobsList
