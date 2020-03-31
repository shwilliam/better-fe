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
