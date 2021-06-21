import { useState } from 'react'

import JobsModal from '$shared/JobsModal'

interface InterestedValues {
  interestedJobs: string[]
  interestedDomains: string[]
}

function SigninStepModal() {
  const [interestedValues, setInterestedValues] = useState<InterestedValues>({
    interestedJobs: [],
    interestedDomains: [],
  })

  function handleInterestedDomains(checkedIds: string[]) {
    setInterestedValues({
      ...interestedValues,
      interestedDomains: checkedIds,
    })
  }

  function handleInterestedJobs(checkedIds: string[]) {
    setInterestedValues({
      ...interestedValues,
      interestedJobs: checkedIds,
    })
  }

  function handleSignupCompleted() {
    console.log(interestedValues)
  }

  if (!interestedValues.interestedDomains.length) {
    return <JobsModal onChange={handleInterestedDomains} />
  }

  if (!interestedValues.interestedJobs.length) {
    return <JobsModal onChange={handleInterestedJobs} />
  }

  // more
  return null
}

export default SigninStepModal
