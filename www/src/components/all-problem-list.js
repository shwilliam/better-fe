import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {ALL_PROBLEMS} from '../context'
import {ProblemList} from './'

export const AllProblemList = () => {
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(ALL_PROBLEMS)

  return (
    <ProblemList
      title="All problems"
      data={data}
      loading={loading}
      error={error}
    />
  )
}
