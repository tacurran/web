import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import { pb32, pb64, pb8 } from '../../freestanding/utils/padding.module.css'
import * as styles from './banner.module.css'

interface PropTypes {
  title: string
  small?: boolean
  description?: React.ReactElement
  button: React.ReactElement
}

const Banner = ({ title, description, button, small }: PropTypes) => (
  <div className={cn(styles.bannerPrimary)}>
    <Container
      fluid={true}
      justify={'center'}
      alignItems={'center'}
      className={cn(styles.bannerPrimary, pb64)}
    >
      <Grid lg={4} md={8} sm={10} xs={12}>
        {!small ? (
          <h1 className={cn('font-h1', pb32)}>{title}</h1>
        ) : (
          <h2 className={cn('font-h3', pb32)}>{title}</h2>
        )}
        {description && (
          <p className={cn('font-p-lg', 'mute-85', pb32)}>{description}</p>
        )}
        <Container justify={'center'}>{button}</Container>
      </Grid>
    </Container>
  </div>
)

export default Banner
