import React from 'react'

import Banner from '../components/layouts/banner/banner'
import { bannerContentJobs } from '../components/layouts/banner/banner-content'
import Layout from '../components/layouts/layout/layout'
import SEO from '../components/layouts/seo/seo'
import SimpleText from '../components/layouts/simple-text/simple-text'
import Team from '../components/layouts/team/team'
import TeamImage from '../components/layouts/team/team-image'
import {
  teamCollaborators,
  teamCommunity,
  teamMembers
} from '../components/layouts/team/team-members'

const AboutPage = () => (
  <Layout>
    <SEO
      description="Secure open source IAM and access control infrastructure for the cloud."
      title="Ory - A modern open source identity solution"
    />
    <SimpleText
      title={'About Us'}
      text={
        <>
          Our mission is to provide a common identity and access infrastructure
          that manages how IAM data is used in cloud applications. We deliver
          the data and associated analytics to members in the network in
          accordance with data privacy and usage conventions. We embrace and
          practice open source software development. We base our work on
          existing and emerging open cloud standards. As developers, we will
          continue to push the boundaries in engineering and design to help
          other developers succeed.
        </>
      }
    />
    <Team {...teamMembers} />
    <Banner {...bannerContentJobs} />
    <Team {...teamCollaborators} />
    <TeamImage {...teamCommunity} />
  </Layout>
)

export default AboutPage
