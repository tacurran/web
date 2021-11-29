import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as SeoProps } from '../../components/layouts/seo/seo'
import { PropTypes as DiversityStatementProps } from '../../components/layouts/summit/diversity-statement'
import { PropTypes as SessionlistProps } from '../../components/layouts/summit/session-list'
import { PropTypes as SummitNavProps } from '../../components/layouts/summit/vertical-nav'

export const seo: SeoProps = {
  title: 'Ory Summit 21 - The Ory Developer Conference',
  description:
    'Ory Summit is a developer conference around cloud identity infrastructure focused on but not limited to authentication, authorization, access control and security.'
}

export const verticalNav: SummitNavProps = {
  id: 'summit.navigation',
  year: 2021,
  menuItems: [
    {
      menuItem: 'About',
      to: '/summit/2021',
      openInNewWindow: false
    },
    {
      menuItem: 'Sessions',
      to: '/summit/2021#sessions',
      openInNewWindow: false
    },
    {
      menuItem: 'Speakers',
      to: '/summit/2021#speakers',
      openInNewWindow: false
    }
  ]
}

export const sessionList: SessionlistProps = {
  id: 'summit.sessionList',
  title: 'Check out the sessions',
  intro: (
    <>
      Ory Summit is a developer conference around cloud identity infrastructure
      focused on but not limited to authentication, authorization, access
      control and security. The conference is about our community: the successes
      we've achieved, obstacles we've encountered and the future of Ory. Watch
      the Ory Keynotes and gain insight into past, present and future directions
      of Ory Open Source and Ory Cloud.
    </>
  ),
  sessionText: (
    <>
      View on-demand recordings and download presentations from Ory Summit 2021.
      Discover the products, services and infrastructure developers have built
      using Ory and learn more about real life examples of using Ory Open Source
      and Ory Cloud in production.
    </>
  ),
  speakerText: (
    <>
      We brought together Ory community members from all over the world for a
      two-day deep dive into all things Ory! Developers, architects, and
      business leaders from the Ory Community took part in this year's Summit
      and shared their experiences with building identity infrastructure using
      our software. We hope we can count you among our speakers next year.{' '}
      <Button
        style={'link-inline'}
        to="hi@ory.sh?subject=Ory20%Summit%202022%20"
      >
        Reach out to us
      </Button>{' '}
      if you are interested in speaking at Ory Summit 2022!
    </>
  )
}

export const diversityStatement: DiversityStatementProps = {
  id: 'diversity-statement',
  title: 'Our commitment is a diverse and welcoming Ory Summit for everyone!',
  text: (
    <>
      We are committed to speakers and participants from underrepresented groups
      in technology. For more information or if you have any questions, reach us
      at{' '}
      <Button style={'link-inline'} to="mailto:hi@ory.sh">
        summit@ory.sh
      </Button>{' '}
      or read our{' '}
      <Button style={'link-inline'} to="/code-of-conduct">
        Code of Conduct
      </Button>
      .
    </>
  )
}
