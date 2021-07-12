import cn from 'classnames'
import React, { ReactNode } from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import * as styles from './mdx-body.module.css'

interface PropTypes {
  children: ReactNode
  padded?: boolean
}

const MDXBody = ({ children, padded }: PropTypes) => (
  <div className={cn(styles.mdxBody, { [styles.padded]: padded })}>
    <Container fluid={true} alignItems={'center'} justify={'center'}>
      <Grid lg={7} md={10} sm={12} xs={12}>
        {children}
      </Grid>
    </Container>
  </div>
)

export default MDXBody
