import { useState } from "react"

interface SearchBasicProps {
  placeholder?:string
  handleChange:(value:string) => void
}

export const SearchBasic = ({ placeholder='Ethereum Address', handleChange } : SearchBasicProps) => {
  
  const [value, setValue] = useState('')
  
  return(
    <div className="search-basic">
      <input type="text" placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)}/>
      <button onClick={() => handleChange(value)}>Search</button>
    </div>
  )
}