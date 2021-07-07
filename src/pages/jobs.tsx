import React from 'react'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import SEO from '../components/layouts/seo/seo'
import Button from '../components/freestanding/button/button'
import HeroFeatures from '../components/layouts/hero/hero-features'
import { heroFeaturesJobsBenefits } from '../components/layouts/hero/hero-features-content'
import JobsList from '../components/layouts/jobs/jobs-list'

const IndexPage = () => {
  return (
    <Layout>
      <SEO description={'#placeholder'} title={'#placeholder'} />
      <HeroFeatures {...heroFeaturesJobsBenefits} />
      <JobsList
        title={'Open Positions'}
        description={
          <>
            We provide developers with a secure, reliable, and scalable access
            solution to their products by building open source libraries that
            are a proven standard for AuthZ/AuthN.
          </>
        }
        buttons={
          <Button to={'mailto:jobs@ory.sh'} style={'filled'}>
            Work with us
          </Button>
        }
      />
      <Quickstart {...quickstartOpenSource} />
    </Layout>
  )
}

export default IndexPage
