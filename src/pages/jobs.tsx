import React from 'react'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import Quotes from '../components/layouts/quotes/quotes'
import SEO from '../components/layouts/seo/seo'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import Button from '../components/freestanding/button/button'
import IconWrapper from '../components/freestanding/icon/icon-wrapper'
import Hero from '../components/layouts/hero/hero'
import heroIllustration from '../images/illustrations/hero.svg'
import Textboxes from '../components/layouts/textboxes/textboxes'
import { textboxesJobsBenefits } from '../components/layouts/textboxes/textboxes-content'
import JobsList from '../components/layouts/jobs/jobs-list'
import Grid from '../components/freestanding/containers/grid'
import Container from '../components/freestanding/containers/container'

const IndexPage = () => {
  const RocketLaunch = (
    <IconWrapper color={'base-white'} icon={'RocketLaunch'} size={'24'} />
  )
  const BookOpen = (
    <IconWrapper color={'base-white'} icon={'BookOpenDuotone'} size={'24'} />
  )
  const ArrowRightWhite = (
    <IconWrapper color={'base-white'} icon={'ArrowRightBold'} size={'16'} />
  )
  const ArrowRightThemed = (
    <IconWrapper color={'themed-primary'} icon={'ArrowRightBold'} size={'16'} />
  )
  const Terminal = (
    <IconWrapper
      color={'themed-primary'}
      icon={'TerminalDuotone'}
      size={'32'}
    />
  )
  const GitMerge = (
    <IconWrapper
      color={'themed-primary'}
      icon={'GitMergeDuotone'}
      size={'32'}
    />
  )
  const Code = (
    <IconWrapper color={'themed-primary'} icon={'CodeDuotone'} size={'32'} />
  )
  const LockOpen = (
    <IconWrapper
      color={'themed-primary'}
      icon={'LockOpenDuotone'}
      size={'32'}
    />
  )
  const UserPlus = (
    <IconWrapper
      color={'themed-primary'}
      icon={'UserPlusDuotone'}
      size={'32'}
    />
  )
  const CirclesThreePlus = (
    <IconWrapper
      color={'themed-primary'}
      icon={'CirclesThreePlusDuotone'}
      size={'32'}
    />
  )

  return (
    <Layout>
      <SEO
        description={
          'Adopt a secure, modern Auth system for the cloud with open source from Ory. Fast, modular integration into any tech stack.'
        }
        title={'Ory - Open Source Auth Solutions For Everyone'}
      />
      <Textboxes {...textboxesJobsBenefits} />
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
