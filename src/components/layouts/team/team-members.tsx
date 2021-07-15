import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import { SocialNetworks } from './team'

export const teamMembers = [
  {
    name: 'Aeneas Rekkas',
    social: [
      {
        network: SocialNetworks.github,
        href: 'https://github.com/aeneasr'
      },
      {
        network: SocialNetworks.linkedin,
        href: 'https://www.linkedin.com/in/aeneasr'
      }
    ],
    img: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Aeneas Rekkas"
        src="../../../images/team/aeneas.png"
      />
    )
  },
  {
    name: 'Thomas Aidan Curran',
    social: [
      {
        network: SocialNetworks.github,
        href: 'https://github.com/tacurran'
      },
      {
        network: SocialNetworks.linkedin,
        href: 'https://www.linkedin.com/in/thomasaidancurran/'
      }
    ],
    img: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Thomas Aidan Curran"
        src="../../../images/team/thomas.png"
      />
    )
  },
  {
    name: 'Patrik Neu',
    social: [
      {
        network: SocialNetworks.github,
        href: 'https://github.com/zepatrik'
      }
    ],
    img: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Patrik Neu"
        src="../../../images/team/patrik.png"
      />
    )
  },
  {
    name: 'John Curran',
    social: [
      {
        network: SocialNetworks.github,
        href: 'https://github.com/jfcurran'
      },
      {
        network: SocialNetworks.instagram,
        href: 'https://www.instagram.com/6099x/'
      }
    ],
    img: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="John Curran"
        src="../../../images/team/john.png"
      />
    )
  },
  {
    name: 'Vincent Kraus',
    social: [
      {
        network: SocialNetworks.github,
        href: 'https://github.com/vinckr'
      }
    ],
    img: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Vincent Kraus"
        src="../../../images/team/vincent.png"
      />
    )
  },
  {
    name: 'Andreas Bucksteeg',
    social: [
      {
        network: SocialNetworks.github,
        href: 'https://github.com/tricky42'
      }
    ],
    img: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Andreas Bucksteeg"
        src="../../../images/team/andreas.png"
      />
    )
  },
  {
    name: 'Piotr Mścichowski',
    social: [
      {
        network: SocialNetworks.github,
        href: 'https://github.com/piotrmsc'
      }
    ],
    img: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Piotr Mścichowski"
        src="../../../images/team/piotr.png"
      />
    )
  },
  {
    name: 'Jakub Blaszczyk',
    social: [
      {
        network: SocialNetworks.github,
        href: 'https://github.com/Demonsthere'
      }
    ],
    img: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Jakub Blaszczyk"
        src="../../../images/team/jakub.png"
      />
    )
  },
  {
    name: 'Alano Terblanche',
    social: [
      {
        network: SocialNetworks.github,
        href: 'https://github.com/Benehiko'
      }
    ],
    img: (
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        aspectRatio={1}
        loading="lazy"
        className="responsive"
        alt="Alano Terblanche"
        src="../../../images/team/alano.png"
      />
    )
  }
]
