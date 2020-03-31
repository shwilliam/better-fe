import {gql} from 'apollo-boost'

export const CREATE_SOLUTION = gql`
  mutation createSolution(
    $id: ID!
    $author: String
    $html: String
    $js: String
    $css: String
  ) {
    updateProblem(
      where: {id: $id}
      data: {
        solutions: {
          create: {
            author: $author
            code: {create: {js: $js, html: $html, css: $css}}
          }
        }
      }
    ) {
      id
    }
  }
`

export const UPVOTE_SOLUTION = gql`
  mutation upvoteSolution($id: ID!, $up_votes: Int!) {
    updateSolution(where: {id: $id}, data: {up_votes: $up_votes}) {
      id
    }
  }
`

export const DOWNVOTE_SOLUTION = gql`
  mutation downvoteSolution($id: ID!, $down_votes: Int!) {
    updateSolution(where: {id: $id}, data: {down_votes: $down_votes}) {
      id
    }
  }
`

export const CREATE_PROBLEM = gql`
  mutation createProblem($author: String, $description: String!) {
    createProblem(
      data: {
        author: $author
        description: $description
        # TODO: handle code boiler
      }
    ) {
      id
    }
  }
`
