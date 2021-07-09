import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import {
  pb16,
  pb32,
  pb64,
  pb8,
  pl8
} from '../../freestanding/utils/padding.module.css'
import * as styles from './jobs-list.module.css'

interface PropTypes {
  title: string
  description?: React.ReactElement
}

type Edge = {
  node: {
    id: string
    frontmatter: {
      title: string
      path: string
      description: string
      position: string
      location: string
    }
  }
}

const MapPinLine = () => (
  <i
    className={'themed-primary ph-map-pin-line ph-map-pin-line-duotone size16'}
  />
)

const ClockClockwise = () => (
  <i
    className={
      'themed-primary ph-clock-clockwise ph-clock-clockwise-duotone size16'
    }
  />
)

const JobsList = ({ title, description }: PropTypes) => {
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
              position
              location
            }
          }
        }
      }
    }
  `)
  return (
    <div className={cn(styles.jobList)}>
      <Container fluid={true} justify={'center'} alignItems={'start'}>
        <Grid lg={8} md={10} sm={12} xs={12}>
          <Container fluid={true} justify={'center'}>
            <Grid
              lg={8}
              md={10}
              sm={12}
              xs={12}
              className={cn(styles.jobHeading, pb64)}
            >
              <h2 className={cn('font-h3', pb32)}>{title}</h2>
              <p className={cn('font-p', 'mute-85')}>{description}</p>
            </Grid>
          </Container>
          <Container>
            {(data.allMdx.edges as Edge[]).map(({ node }) => (
              <Button
                style={'none'}
                to={node.frontmatter.path}
                className={cn(styles.jobItem)}
                key={node.id}
              >
                <Grid lg={6} md={6} sm={12} xs={12}>
                  <div className={cn(pb16)}>
                    <h3 className={cn('font-h5', pb8)}>
                      {node.frontmatter.title}
                    </h3>
                    <div className={cn(styles.jobDetails)}>
                      <MapPinLine />
                      <p className={cn('font-p-xs', pl8)}>
                        <b>{node.frontmatter.location}</b>
                      </p>
                    </div>
                    <div className={cn(styles.jobDetails)}>
                      <ClockClockwise />
                      <p className={cn('font-p-xs', pl8)}>
                        {node.frontmatter.position}
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid lg={6} md={6} sm={12} xs={12}>
                  <p className={cn('font-p-sm', 'mute-85')}>
                    {node.frontmatter.description} <b>Learn more</b>
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

export default JobsList
