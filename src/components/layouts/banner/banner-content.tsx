import React from 'react'

import Button from '../../freestanding/button/button'

const GitMerge = <i className="ph-git-merge base-white size32" />

export const bannerContentJobs = {
  title: "We're hiring!",
  small: true,
  description: (
    <>
      Help us create an open and free standard for authentication and
      authorization that is available to everyone.
    </>
  ),
  button: (
    <>
      <Button
        style={'filled'}
        theme={'light'}
        to={'/jobs'}
        iconRight={GitMerge}
      >
        Join our Team
      </Button>
    </>
  )
}
