import React, {useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from 'carbon-components-react'
import {RECENT_PROBLEMS} from '../context'
import {ProblemList} from './'

export const RecentProblemList = () => {
  const history = useHistory()
  const navigateToAllProblems = useCallback(() => {
    history.push('/problems')
  }, [history])

  return (
    <>
      <ProblemList title="Recent problems" query={RECENT_PROBLEMS} />
      <Button kind="ghost" onClick={navigateToAllProblems}>
        View all problems
      </Button>
    </>
  )
}
