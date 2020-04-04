import React, {useMemo} from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  DataTable,
  TableCell,
  DataTableSkeleton,
} from 'carbon-components-react'
import {ProblemListItem} from './'
import {format} from 'timeago.js'

const HEADERS = [
  {header: 'Author', key: 'author'},
  {header: 'Description', key: 'description'},
  {header: 'Tag(s)', key: 'tags'},
  {header: 'Solutions', key: 'solutions'},
  {header: 'Published', key: 'createdAt'},
]

export const ProblemList = ({data, loading, error, title, description}) => {
  const formattedProblems = useMemo(
    () =>
      data?.problems.map(p => ({
        ...p,
        author: p?.author || 'Anon',
        createdAt: format(p?.createdAt),
        tags: p?.tags.join(', '),
        solutions: p?.solutions.length,
      })) || [],
    [data],
  )

  if (error) return <p>Error :(</p>
  if (loading)
    return (
      <TableContainer title={title} description={description}>
        <DataTableSkeleton headers={HEADERS} rowCount={5} />
      </TableContainer>
    )

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
        <TableContainer
          title={title}
          description={description}
          {...getTableContainerProps()}
        >
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
                <ProblemListItem id={row.id} {...getRowProps({row})}>
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
