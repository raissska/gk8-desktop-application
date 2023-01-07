import { useContext } from 'react'
import { AppContext } from '../App'
import { IAppContext } from '../models'
import { columns } from '../utils/constants'



export const Body = () => {

  const { transactions } = useContext(AppContext) as IAppContext

  return (
    <tbody className="table-body">
      {transactions.map((item, index) => {
        return (
          <tr className="body">
            <td className="cell"> {index + 1}</td>
            { columns.map(row => <td>{item[row.accessor]}</td>)}
          </tr>
        )
      })}
    </tbody >


  )
}