import cn from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Container from './freestanding/containers/container'
import Grid from './freestanding/containers/grid'
import ContentText from './freestanding/content/content-text'
import Molecule from './freestanding/molecule/molecule'
import Profile, { SocialNetworks } from './profile'

import { pb32, pb48 } from './freestanding/utils/padding.module.css'
import * as styles from './team.module.css'

const Team = () => {
  return (
    <div className={cn(styles.team)}>
      <Container fluid={true} alignItems={'center'}>
        <Grid lg={4} md={4} sm={12} xs={12} className={cn(pb32)}>
          <ContentText>
            <Molecule className={cn(pb48)}>
              <h1 className={cn('font-h2', pb32)}>About Us</h1>
              <p className={cn('font-p', 'mute-85')}>
                Our mission is to provide a common identity and access
                infrastructure that manages how IAM data is used in cloud
                applications. We deliver the data and associated analytics to
                members in the network in accordance with data privacy and usage
                conventions. We embrace and practice Open Source Software
                development. We base our work on existing and emerging open
                cloud standards. As developers, we will continue to push the
                boundries in engineering and design to help other developers
                succeed.
              </p>
            </Molecule>
          </ContentText>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12}>
          <Profile
            name="Aeneas Rekkas"
            social={[
              {
                network: SocialNetworks.github,
                href: 'https://github.com/aeneasr'
              },
              {
                network: SocialNetworks.linkedin,
                href: 'https://www.linkedin.com/in/aeneasr'
              }
            ]}
            img={
              <StaticImage
                placeholder="blurred"
                layout="constrained"
                aspectRatio={1}
                width={180}
                loading="lazy"
                className="responsive"
                alt="Ory Project Dashboard"
                src="../images/team/aeneas.png"
              />
            }
          />
          <Profile
            name="Thomas Aidan Curran"
            social={[
              {
                network: SocialNetworks.github,
                href: 'https://github.com/tacurran'
              },
              {
                network: SocialNetworks.linkedin,
                href: 'https://www.linkedin.com/in/thomasaidancurran/'
              }
            ]}
            img={
              <StaticImage
                placeholder="blurred"
                layout="constrained"
                aspectRatio={1}
                width={180}
                loading="lazy"
                className="responsive"
                alt="Ory Project Dashboard"
                src="../images/team/thomas.png"
              />
            }
          />
          <Profile
            name="Patrik Neu"
            social={[
              {
                network: SocialNetworks.github,
                href: 'https://github.com/zepatrik'
              }
            ]}
            img={
              <StaticImage
                placeholder="blurred"
                layout="constrained"
                aspectRatio={1}
                width={180}
                loading="lazy"
                className="responsive"
                alt="Ory Project Dashboard"
                src="../images/team/patrik.png"
              />
            }
          />
          <Profile
            name="John Curran"
            social={[
              {
                network: SocialNetworks.github,
                href: 'https://github.com/jfcurran'
              }
            ]}
            img={
              <StaticImage
                placeholder="blurred"
                layout="constrained"
                aspectRatio={1}
                width={180}
                loading="lazy"
                className="responsive"
                alt="Ory Project Dashboard"
                src="../images/team/john.png"
              />
            }
          />
          <Profile
            name="Vincent Kraus"
            social={[
              {
                network: SocialNetworks.github,
                href: 'https://github.com/vinckr'
              }
            ]}
            img={
              <StaticImage
                placeholder="blurred"
                layout="constrained"
                aspectRatio={1}
                width={180}
                loading="lazy"
                className="responsive"
                alt="Ory Project Dashboard"
                src="../images/team/vincent.png"
              />
            }
          />
          <Profile
            name="Andreas Bucksteeg"
            social={[
              {
                network: SocialNetworks.github,
                href: 'https://github.com/tricky42'
              }
            ]}
            img={
              <StaticImage
                placeholder="blurred"
                layout="constrained"
                aspectRatio={1}
                width={180}
                loading="lazy"
                className="responsive"
                alt="Ory Project Dashboard"
                src="../images/team/andreas.png"
              />
            }
          />
          <Profile
            name="Piotr Mścichowski"
            social={[
              {
                network: SocialNetworks.github,
                href: 'https://github.com/piotrmsc'
              }
            ]}
            img={
              <StaticImage
                placeholder="blurred"
                layout="constrained"
                aspectRatio={1}
                width={180}
                loading="lazy"
                className="responsive"
                alt="Ory Project Dashboard"
                src="../images/team/piotr.png"
              />
            }
          />
          <Profile
            name="Jakub Blaszczyk"
            social={[
              {
                network: SocialNetworks.github,
                href: 'https://github.com/Demonsthere'
              }
            ]}
            img={
              <StaticImage
                placeholder="blurred"
                layout="constrained"
                aspectRatio={1}
                width={180}
                loading="lazy"
                className="responsive"
                alt="Ory Project Dashboard"
                src="../images/team/jakub.png"
              />
            }
          />
          <Profile
            name="Alano Terblanche"
            social={[
              {
                network: SocialNetworks.github,
                href: 'https://github.com/Benehiko'
              }
            ]}
            img={
              <StaticImage
                placeholder="blurred"
                layout="constrained"
                aspectRatio={1}
                width={180}
                loading="lazy"
                className="responsive"
                alt="Ory Project Dashboard"
                src="../images/team/alano.png"
              />
            }
          />
        </Grid>
      </Container>
    </div>
  )
}

export default Team
