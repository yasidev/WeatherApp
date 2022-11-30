import React from 'react'
import { useState } from 'react'

export default function ({setQuery}) {
    const [value,setValue] = useState()
  return (
    <div className='search'>
        <input type="text" placeholder='search city name' value={value} onChange={e=>setValue(e.target.value)} />
        <button onClick={()=>setQuery(value)}>Check Weather</button>
    </div>
  )
}
