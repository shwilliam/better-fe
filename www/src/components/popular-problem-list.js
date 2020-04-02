import React, {useCallback, useMemo} from 'react'
import {useQuery} from '@apollo/react-hooks'
import {useHistory} from 'react-router-dom'
import {Button} from 'carbon-components-react'
import {ALL_PROBLEMS} from '../context'
import {sortBySolutionsLength} from '../utils'
import {ProblemList} from './'

export const PopularProblemList = () => {
  const history = useHistory()
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(ALL_PROBLEMS)
  const formattedData = useMemo(() => {
    if (data) {
      return {
        problems: data.problems.sort(sortBySolutionsLength).slice(0, 5),
      }
    } else return null
  }, [data])
  const navigateToAllProblems = useCallback(() => {
    history.push('/problems')
  }, [history])

  return (
    <>
      <ProblemList
        title="Popular problems"
        data={formattedData}
        loading={loading}
        error={error}
      />
      <Button kind="ghost" onClick={navigateToAllProblems}>
        View all problems
      </Button>
    </>
  )
}
