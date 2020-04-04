import React from 'react'
import {useNavigation} from '../../hooks'
import {Button} from 'carbon-components-react'

export const Home = () => {
  const {navigateToPopularProblems} = useNavigation()

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
