import React, {useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from 'carbon-components-react'

export const Home = () => {
  const history = useHistory()
  const navigateToPopularProblems = useCallback(() => {
    history.push('/problems/popular')
  }, [history])

  return (
    <section className="hero">
      <p className="hero__title">
        Welcome to Better FE!{' '}
        <span role="img" aria-label="">
          👋
        </span>
      </p>

      <p className="hero__subtitle">
        Post a frontend problem, share your solution & vote on the most elegant
        approach
      </p>

      <Button className="pad--top" onClick={navigateToPopularProblems}>
        View popular problems
      </Button>
    </section>
  )
}
