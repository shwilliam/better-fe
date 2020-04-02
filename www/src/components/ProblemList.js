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
import {ALL_PROBLEMS} from '../context'
import {ProblemListItem} from './'
import {format} from 'timeago.js'

const HEADERS = [
  {header: 'Author', key: 'author'},
  {header: 'Published', key: 'createdAt'},
  {header: 'Description', key: 'description'},
]

export const ProblemList = () => {
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(ALL_PROBLEMS)
  const formattedProblems = useMemo(
    () =>
      data?.problems.map(({createdAt, ...p}) => ({
        ...p,
        createdAt: format(createdAt),
      })),
    [data],
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data.problems?.length) return <p>No problems...</p>

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
        <TableContainer title="Recent problems" {...getTableContainerProps()}>
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
                    <TableCell key={id}>{value}</TableCell>
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
