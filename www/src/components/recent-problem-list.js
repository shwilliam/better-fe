import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {Button} from 'carbon-components-react'
import {RECENT_PROBLEMS} from '../context'
import {useNavigation} from '../hooks'
import {ProblemList} from './'

export const RecentProblemList = () => {
  const {navigateToAllProblems} = useNavigation()
  const {loading, error, data} = useQuery(RECENT_PROBLEMS)

  return (
    <>
      <ProblemList
        title="Recent problems"
        description="The most recently posted problems"
        data={data}
        loading={loading}
        error={error}
      />
      <Button kind="ghost" onClick={navigateToAllProblems}>
        View all problems
      </Button>
    </>
  )
}
