import React, {useMemo} from 'react'
import {useQuery} from '@apollo/react-hooks'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  DataTable,
  TableCell,
} from 'carbon-components-react'
import {ProblemListItem} from './'
import {format} from 'timeago.js'

const HEADERS = [
  {header: 'Author', key: 'author'},
  {header: 'Published', key: 'createdAt'},
  {header: 'Description', key: 'description'},
]

export const ProblemList = ({title, query}) => {
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(query)
  const formattedProblems = useMemo(
    () =>
      data?.problems.map(p => ({
        ...p,
        createdAt: format(p?.createdAt),
      })) || [],
    [data],
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <DataTable
      rows={formattedProblems}
      headers={HEADERS}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
        getTableContainerProps,
      }) => (
        <TableContainer title={title} {...getTableContainerProps()}>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableHeader
                    {...getHeaderProps({
                      header,
                    })}
                  >
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <ProblemListItem
                  link={`/problems/${row.id}`}
                  {...getRowProps({row})}
                >
                  {row.cells.map(({id, value}) => (
                    <TableCell key={id}>{value || 'Anon'}</TableCell>
                  ))}
                </ProblemListItem>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  )
}
