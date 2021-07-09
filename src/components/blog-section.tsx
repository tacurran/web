import cn from 'classnames'
import React, { ReactNode } from 'react'

import Container from './freestanding/containers/container'
import Grid from './freestanding/containers/grid'

import * as styles from './blog-section.module.css'
import { pb32 } from './freestanding/utils/padding.module.css'

interface PropTypes {
  children: ReactNode
  padded?: boolean
  overrideStyles?: object
}

const BlogSection = ({ children, padded, overrideStyles }: PropTypes) => (
  <div
    className={
      !padded ? cn(styles.blogSection) : cn(styles.padded, styles.blogSection)
    }
    style={overrideStyles}
  >
    <Container fluid={true} alignItems={'center'} justify={'center'}>
      <Grid lg={7} md={10} sm={12} xs={12} className={cn(pb32)}>
        {children}
      </Grid>
    </Container>
  </div>
)

export default BlogSection
