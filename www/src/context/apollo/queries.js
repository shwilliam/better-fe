import {gql} from 'apollo-boost'

export const ALL_PROBLEMS = gql`
  query allProblems {
    problems {
      id
      description
      solutions {
        id
        author
      }
    }
  }
`
