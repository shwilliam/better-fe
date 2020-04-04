import React, {useMemo} from 'react'
import {useQuery} from '@apollo/react-hooks'
import {Button} from 'carbon-components-react'
import {sortBySolutionsLength} from '../utils'
import {ALL_PROBLEMS} from '../context'
import {useNavigation} from '../hooks'
import {ProblemList} from './'

export const PopularProblemList = () => {
  const {navigateToAllProblems} = useNavigation()
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(ALL_PROBLEMS)
  const formattedData = useMemo(() => {
    if (data) {
      return {
        problems: data.problems.sort(sortBySolutionsLength).slice(0, 5),
      }
    } else return null
  }, [data])

  return (
    <>
      <ProblemList
        title="Popular problems"
        description="The most active problems"
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
