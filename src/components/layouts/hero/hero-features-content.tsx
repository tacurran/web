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
      icon: Code,
      title: <>Commitment</>,
      description: (
        <>
          We are a company that believes in building great products. We take
          pride in breaking boundaries, constantly improving, and aiming to
          produce great work in order to win the market. Our mission is
          excellence.
        </>
      )
    },
    {
      icon: UserPlus,
      title: <>Respect</>,
      description: (
        <>
          We are a small, passionate team that thrives on creating and
          delivering meaningful work. We treat everyone with whom we work with
          respect, regardless of position. We work hard to understand the
          details, but we approach problems with humility and a beginner’s state
          of mind.
        </>
      )
    },
    {
      icon: CirclesThreePlus,
      title: <>Balance</>,
      description: (
        <>
          We believe that maintaining a healthy balance enables high
          performance. Whether you find it through a healthy lifestyle, time
          with friends and family, or intellectual pursuits, a wholesome
          work-life balance is key to producing expectional work.
        </>
      )
    },
    {
      icon: LockOpen,
      title: <>Honesty</>,
      description: (
        <>
          We can contribute most effectively when we communicate openly and
          honestly - learning both from our successes and our failures. Openness
          and sincerity are the heart and soul of Ory.
        </>
      )
    }
  ]
}
