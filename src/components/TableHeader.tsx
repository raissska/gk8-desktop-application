import { columns } from '../utils/constants'


export const Header = () => {
  return (
    
      <thead>
        <tr className="head">
          <th className="cell">#</th>
          {columns.map(item => <th className="cell" key={item.accessor}>{item['Header']}</th>)}
        </tr>
      </thead>
  

  )
}