import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'

import { pb16, pb32 } from '../../freestanding/utils/padding.module.css'
import * as styles from './jobs-hero.module.css'

interface PropTypes {
  title: string
  description?: string
  position: string
  location: string
}

const JobsHero = ({ title, description, position, location }: PropTypes) => (
  <div className={cn(styles.blogHero)}>
    <Container fluid={true} alignItems={'center'} justify={'center'}>
      <Grid lg={7} md={10} sm={12} xs={12}>
        <ContentText>
          <Molecule>
            <h2 className={cn('font-h3', pb32)}>{title}</h2>
            {description && (
              <p className={cn('font-overline', 'primary', pb16)}>
                {description}
              </p>
            )}
            <p className={cn('font-p-sm')}>
              {position} - {location}
            </p>
          </Molecule>
        </ContentText>
      </Grid>
    </Container>
  </div>
)

export default JobsHero
