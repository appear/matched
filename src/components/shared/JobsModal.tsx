import React from 'react'
import { useQuery } from '@apollo/client'

import ButtonModal from '$shared/ButtonModal'
import { GET_JOBS } from '$queries/job'

interface JobsModalProps {
  checkedIds?: string[]
  onChange: (checkedIds: string[]) => void
}

function JobsModal({ checkedIds, onChange }: JobsModalProps) {
  const { data } = useQuery(GET_JOBS)

  function handleSubmit(_: React.SyntheticEvent, checkedIds: string[]) {
    onChange(checkedIds)
  }

  return (
    <ButtonModal
      title=""
      onClose={() => null}
      isShow={true}
      buttons={data?.GetJobs?.jobs || []}
      initialCheckedIds={checkedIds}
      onSubmit={handleSubmit}
    />
  )
}

export default JobsModal
