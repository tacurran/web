import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import cn from 'classnames'
import * as styles from './jobs-list.module.css'
import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import {
  pb16,
  pb32,
  pb64,
  pb8,
  pl8,
  pr8,
  pt24,
  pt32
} from '../../freestanding/utils/padding.module.css'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Grid from '../../freestanding/containers/grid'
import IconWrapper from '../../freestanding/icon/icon-wrapper'

interface PropTypes {
  title: string
  description?: React.ReactElement
  buttons?: React.ReactNode
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

const RocketLaunch = () => (
  <IconWrapper color={'base-white'} icon={'RocketLaunch'} size={'16'} />
)

const BookOpen = () => (
  <IconWrapper color={'base-white'} icon={'BookOpenDuotone'} size={'24'} />
)

const JobsList = ({ title, description, buttons }: PropTypes) => {
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
      <Container fluid={true} alignItems={'start'}>
        <Grid lg={4} md={3} sm={12} xs={12} className={cn(pb64)}>
          <ContentText>
            <Molecule>
              <h2 className={cn('font-h3')}>{title}</h2>
              <p className={cn('font-p', pt32)}>{description}</p>
            </Molecule>
            <MoleculeInteraction className={cn(pt24)}>
              {buttons}
            </MoleculeInteraction>
          </ContentText>
        </Grid>
        <Grid lg={6} md={8} sm={12} xs={12}>
          <Container
            alignItems={'start'}
            justify={'start'}
            className={cn(styles.jobs)}
          >
            {(data.allMdx.edges as Edge[]).map(({ node }) => (
              <Button
                style={'filled'}
                to={node.frontmatter.path}
                className={cn(styles.jobItem)}
                key={node.id}
              >
                <h3 className={cn(styles.jobTitle, 'font-h5', pb8)}>
                  {node.frontmatter.title}
                </h3>
                <p className={cn(styles.jobDescription, 'font-p-sm', pb16)}>
                  {node.frontmatter.description}
                </p>
                <div className={cn(styles.jobDetails)}>
                  <RocketLaunch />
                  <p className={cn('font-p-sm', pl8)}>
                    <b>{node.frontmatter.location}</b>
                  </p>
                </div>
                <div className={cn(styles.jobDetails)}>
                  <RocketLaunch />
                  <p className={cn('font-p-sm', pl8)}>
                    <b>{node.frontmatter.position}</b>
                  </p>
                </div>
              </Button>
            ))}
          </Container>
        </Grid>
      </Container>
    </div>
  )
}

export default JobsList
