import {gql} from 'apollo-boost'

export const ALL_PROBLEMS = gql`
  query allProblems {
    problems(orderBy: createdAt_DESC) {
      id
      description
      solutions(orderBy: up_votes_DESC) {
        id
        author
        up_votes
        down_votes
      }
    }
  }
`
