import React, {useCallback} from 'react'
import {useQuery} from '@apollo/react-hooks'
import {useHistory} from 'react-router-dom'
import {Button} from 'carbon-components-react'
import {RECENT_PROBLEMS} from '../context'
import {ProblemList} from './'

export const RecentProblemList = () => {
  const history = useHistory()
  const navigateToAllProblems = useCallback(() => {
    history.push('/problems')
  }, [history])
  const {loading, error, data} = useQuery(RECENT_PROBLEMS)

  return (
    <>
      <ProblemList
        title="Recent problems"
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
