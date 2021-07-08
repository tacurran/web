import IconWrapper from '../../freestanding/icon/icon-wrapper'
import React from 'react'

const Code = (
  <IconWrapper color={'themed-primary'} icon={'CodeDuotone'} size={'32'} />
)
const LockOpen = (
  <IconWrapper color={'themed-primary'} icon={'LockOpenDuotone'} size={'32'} />
)
const UserPlus = (
  <IconWrapper color={'themed-primary'} icon={'UserPlusDuotone'} size={'32'} />
)
const CirclesThreePlus = (
  <IconWrapper
    color={'themed-primary'}
    icon={'CirclesThreePlusDuotone'}
    size={'32'}
  />
)

export const heroFeaturesJobsBenefits = {
  title: 'Work with us to transform',
  description: (
    <>
      At Ory we build secure and open Auth so developers don't have to. Ory is
      open source, cloud-native, and building at scale.
    </>
  ),

  textbox: [
    {
      icon: Code,
      title: <>Open Source Spirit</>,
      description: (
        <>
          Help us create an open and free standard for authentication and
          authorization that is available to everyone. Much of the work we do is
          released to public domain or supports our open source offerings. We
          work closely with our large community of OS contributors.
        </>
      )
    },
    {
      icon: UserPlus,
      title: <>Freedom To Build</>,
      description: (
        <>
          We feel that we should work with the best software out there and
          support those that build it - Ory is using open source for almost
          everything. Work with technology you love and keep your skills sharp
          on a modern stack, always at the forefront of change.
        </>
      )
    },
    {
      icon: CirclesThreePlus,
      title: <>Do What Matters</>,
      description: (
        <>
          Everyone working at Ory has a passion for the work we do. We foster a
          culture of flat hierarchy, where everyone has a voice and we seek
          input from the whole company on key decisions. At Ory, people care
          about what they are building. Build something that has real value.
        </>
      )
    },
    {
      icon: LockOpen,
      title: <>Play A Vital Role</>,
      description: (
        <>
          You will be working in a fast-moving startup, breaking up a market
          that has been plagued by corporate mold far too long. At Ory you won’t
          just be another employee - You will have a direct impact on Ory’s
          success and the team will support you and also depend on you.
        </>
      )
    }
  ]
}

export const heroFeaturesJobsValues = {
  small: true,
  title: 'Our Core Values',
  textbox: [
    {
      icon: CirclesThreePlus,
      title: <>Innovation</>,
      description: (
        <>
          Building an enterprise-grade, globally scalable, secure infrastructure
          around Identity Management means thinking out-of-the-box. We need to
          embrace leading-edge technology, new ways of thinking, and redefining
          business processes to innovate the market on how to solve some of its
          most fundamental challenges. Ory's aim is no less than to lead the
          market in state-of-the-art solutions for future proof Identity
          Management. Innovation is part of our DNA.
        </>
      )
    },
    {
      icon: Code,
      title: <>Commitment</>,
      description: (
        <>
          At Ory, we truly believe in building great products. Products, that
          matter. Products, that are relevant for our customers. Products, that
          help customers scale their business without limits. We take pride in
          breaking boundaries, constantly improving, and aiming to produce great
          work in order to win the market. Creating value for our customers
          comes first. Our mission is excellence.
        </>
      )
    },
    {
      icon: UserPlus,
      title: <>Respect</>,
      description: (
        <>
          We are passionate about creating and delivering meaningful work. This
          is only possible as a team: Ory as a company, Ory together with our
          customers, and Ory as part of a larger community. Giving back to the
          community we serve also means being committed to work hard to take on
         challenges, approaching problems with humility – and a deep respect for diversity in business, culture, and
          society. Together we build the products that can serve a purpose.
        </>
      )
    },
    {
      icon: LockOpen,
      title: <>Honesty</>,
      description: (
        <>
          We can contribute most effectively when we communicate openly and
          honestly - learning both from our successes and our failures.
          Listening to our customers and or employees. Continuously learning,
          adapting, and growing our business on a healthy foundation. Openness
          and sincerity are the heart and soul of Ory.
        </>
      )
    }
  ]
}
