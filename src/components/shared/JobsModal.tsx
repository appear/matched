import { useState } from 'react'

import { useQuery } from '@apollo/client'

import ButtonModal from '$shared/ButtonModal'
import { GET_JOBS } from '$queries/user'

interface JobsModalProps {
  checkedIds?: string[]
  onChange: (checkedIds: string[]) => void
}

function JobsModal({
  checkedIds: initialCheckedIds,
  onChange,
}: JobsModalProps) {
  const [checkedIds, setCheckedIds] = useState<string[]>(
    initialCheckedIds || [],
  )
  const { data } = useQuery(GET_JOBS)

  function handleCheckedIds(_, checkedId: string) {
    if (checkedIds.includes(checkedId)) {
      setCheckedIds(checkedIds.filter((id) => id !== checkedId))
      return
    }

    if (checkedIds.length < 2) {
      setCheckedIds([...checkedIds, checkedId])
    }
  }

  function handleSubmit() {
    onChange(checkedIds)
  }

  return (
    <ButtonModal
      title=""
      onClose={() => null}
      isShow={true}
      buttons={data?.GetJobs?.jobs || []}
      checkedIds={checkedIds}
      onClick={handleCheckedIds}
      onSubmit={handleSubmit}
    />
  )
}

export default JobsModal
