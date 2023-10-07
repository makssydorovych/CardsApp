import { ComponentPropsWithoutRef, FC } from 'react'

import s from './table.module.scss'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type Column = {
  key: string
  title: string
  sortable?: boolean
}

export const Table = ({ ...rest }: ComponentPropsWithoutRef<'table'>) => {
  return <table {...rest} className={s.table}></table>
}

export const TableHead = ({ ...rest }: ComponentPropsWithoutRef<'thead'>) => {
  return <thead {...rest} className={s.thead}></thead>
}

export const TableHeader: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      sort?: Sort
      onSort?: (sort: Sort) => void
    },
    'children'
  >
> = ({ columns, sort, onSort, ...restProps }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) return

    if (sort?.key !== key) return onSort({ key, direction: 'asc' })

    if (sort.direction === 'desc') return onSort(null)

    return onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  return (
    <TableHead {...restProps}>
      <TableRow>
        {columns.map(({ title, key, sortable }) => (
          <TableHeadCell key={key} onClick={handleSort(key, sortable)}>
            {title}
            {sort && sort.key === key && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export const TableHeadCell = ({ ...rest }: ComponentPropsWithoutRef<'th'>) => {
  return <th {...rest} className={s.th}></th>
}

export const TableBody = ({ ...rest }: ComponentPropsWithoutRef<'tbody'>) => {
  return <tbody {...rest}></tbody>
}

export const TableRow = ({ ...rest }: ComponentPropsWithoutRef<'tr'>) => {
  return <tr {...rest} className={s.row}></tr>
}

export const TableCell = ({ ...rest }: ComponentPropsWithoutRef<'td'>) => {
  return <td {...rest} className={s.td}></td>
}
