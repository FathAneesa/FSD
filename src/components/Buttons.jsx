import { Button } from '@mui/material'
import React, { useState } from 'react'

const Buttons = () => {
    var [a,seta]=useState()
    const btn1=()=>{
        seta("React")
    }
    const btn2=()=>{
        seta("Angular")
    }
    const btn3=()=>{
        seta("Nest")

    }


  return (
    <div>
        <h1>Welcome {a}</h1>
        <Button variant='contained' onClick={btn1}>React</Button>&nbsp;
        <Button variant='contained' onClick={btn2}>Angular</Button>&nbsp;
        <Button variant='contained' onClick={btn3}>Nest</Button>
    </div>
  )
}

export default Buttons