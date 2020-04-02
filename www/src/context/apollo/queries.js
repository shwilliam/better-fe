import {gql} from 'apollo-boost'

export const ALL_PROBLEMS = gql`
  query allProblems {
    problems(orderBy: createdAt_DESC) {
      id
      description
      author
      createdAt
      tags
      solutions {
        id
      }
    }
  }
`

export const RECENT_PROBLEMS = gql`
  query recentProblems {
    problems(orderBy: createdAt_DESC, first: 5) {
      id
      description
      author
      createdAt
      tags
      solutions {
        id
      }
    }
  }
`

export const PROBLEM = gql`
  query problem($id: ID!) {
    problem(where: {id: $id}) {
      id
      description
      createdAt
      tags
      boilerplate {
        html
        js
        css
      }
      solutions(orderBy: up_votes_DESC) {
        id
        author
        up_votes
        down_votes
        createdAt
        code {
          html
          js
          css
        }
      }
    }
  }
`
