import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Table, TableBody, TableCell, TableHeader, TableRow } from './table.tsx'

const meta: Meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta

const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

type Column = {
  key: string
  title: string
  sortable?: boolean
}

const columns: Array<Column> = [
  {
    key: 'name',
    title: 'Name',
    sortable: true,
  },
  {
    key: 'cardsCount',
    title: 'Cards',
    sortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    sortable: true,
  },
  {
    key: 'createdBy',
    title: 'Created by',
    sortable: true,
  },
]

type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const WithSort = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)

    // const sortedString = useMemo(() => {
    //   if (!sort) return null
    //
    //   return `${sort.key}-${sort.direction}`
    // }, [sort])

    return (
      <Table>
        <TableHeader columns={columns} sort={sort} onSort={setSort}></TableHeader>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.title}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.cardsCount}</TableCell>
              <TableCell>{item.updated}</TableCell>
              <TableCell>{item.createdBy}</TableCell>
              <TableCell>icons...</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}
