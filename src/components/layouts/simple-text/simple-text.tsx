import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import { pb32 } from '../../freestanding/utils/padding.module.css'
import * as styles from './simple-text.module.css'

interface PropTypes {
  title: string
  small?: boolean
  text: React.ReactElement
}

const SimpleText = ({ title, small, text }: PropTypes) => (
  <div className={cn(styles.simpleText)}>
    <Container fluid={true} alignItems={'start'} justify={'center'}>
      <Grid lg={8} md={10} sm={12} xs={12}>
        <Container alignItems={'start'}>
          <Grid lg={5} md={6} sm={12} xs={12}>
            {!small ? (
              <h1 className={cn('font-h1', pb32)}>{title}</h1>
            ) : (
              <h3 className={cn('font-h3', pb32)}>{title}</h3>
            )}
          </Grid>
          <Grid lg={6} md={6} sm={12} xs={12}>
            <p className={cn('font-p-lg', 'mute-85')}>{text}</p>
          </Grid>
        </Container>
      </Grid>
    </Container>
  </div>
)

export default SimpleText
