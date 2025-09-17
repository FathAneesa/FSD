import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [c,setc]=useState(0)

    const Clicki=()=>{
        setc(c+1)
    }
    const Clickd=()=>{
        setc(c-1)
    }
  return (
    <div>
        <h1>Counter</h1>
        <br /><br />
        <text>{c}</text><br /><br />
        <Button variant='contained' onClick={Clicki}>+</Button> &nbsp;
        <Button variant='contained' onClick={Clickd}>-</Button>

    
    </div>
  )
}

export default Counter