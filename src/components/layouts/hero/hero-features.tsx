import cn from 'classnames'
import React from 'react'

import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'

import {
  pb32,
  pb48,
  pb64,
  pb8
} from '../../freestanding/utils/padding.module.css'
import * as styles from './hero-features.module.css'

export interface Text {
  icon?: React.ReactElement
  title: React.ReactElement
  description: React.ReactElement
}

interface PropTypes {
  thin?: boolean
  small?: boolean
  title: string
  description?: React.ReactElement
  textbox: Array<Text>
}

const HeroFeatures = ({
  thin,
  small,
  title,
  description,
  textbox
}: PropTypes) => (
  <div className={cn(styles.heroFeatures)}>
    <Container fluid={true} justify={'center'} alignItems={'start'}>
      {!thin ? (
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Container justify={'center'} className={cn(pb64)}>
            <Grid
              lg={8}
              md={10}
              sm={12}
              xs={12}
              className={cn(styles.heroFeaturesHeading)}
            >
              {!small ? (
                <h1 className={cn('font-h1', pb32)}>{title}</h1>
              ) : (
                <h2 className={cn('font-h3', pb32)}>{title}</h2>
              )}
              {description && (
                <p className={cn('font-p-lg', 'mute-85', pb8)}>{description}</p>
              )}
            </Grid>
          </Container>
          <Container alignItems={'start'} justify={'start'}>
            {textbox.map((f, index) => {
              return (
                <Grid
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  className={cn(pb48, styles.heroFeaturesContent)}
                  key={index}
                >
                  <Container flexContainer={'row'} alignItems={'start'}>
                    {f.icon && (
                      <ColourWrapper
                        className={cn(pb8)}
                        text={'themed-primary'}
                      >
                        {f.icon}
                      </ColourWrapper>
                    )}
                    <ContentText>
                      <h4 className={cn('font-h5', pb8)}>{f.title}</h4>
                      <p className={cn('font-p-sm', 'mute-60', pb8)}>
                        {f.description}
                      </p>
                    </ContentText>
                  </Container>
                </Grid>
              )
            })}
          </Container>
        </Grid>
      ) : (
        <Grid lg={8} md={10} sm={12} xs={12}>
          <Container fluid={true} justify={'center'} className={cn(pb64)}>
            <Grid
              lg={8}
              md={10}
              sm={12}
              xs={12}
              className={cn(styles.heroFeaturesHeading)}
            >
              {!small ? (
                <h1 className={cn('font-h1', pb32)}>{title}</h1>
              ) : (
                <h2 className={cn('font-h3', pb32)}>{title}</h2>
              )}
              {description && (
                <p className={cn('font-p-lg', 'mute-85', pb8)}>{description}</p>
              )}
            </Grid>
          </Container>
          <Container alignItems={'start'} justify={'start'}>
            {textbox.map((f, index) => {
              return (
                <Grid
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  className={cn(pb48, styles.heroFeaturesContent)}
                  key={index}
                >
                  <Container flexContainer={'row'} alignItems={'start'}>
                    {f.icon && (
                      <ColourWrapper
                        className={cn(pb8)}
                        text={'themed-primary'}
                      >
                        {f.icon}
                      </ColourWrapper>
                    )}
                    <ContentText>
                      <h4 className={cn('font-h5', pb8)}>{f.title}</h4>
                      <p className={cn('font-p-sm', 'mute-60', pb8)}>
                        {f.description}
                      </p>
                    </ContentText>
                  </Container>
                </Grid>
              )
            })}
          </Container>
        </Grid>
      )}
    </Container>
  </div>
)

export default HeroFeatures
