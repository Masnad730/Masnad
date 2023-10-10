import { Children } from 'react'
import TableLayout from './TableLayout'

const TableHeading = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  )
}
export default TableHeading
