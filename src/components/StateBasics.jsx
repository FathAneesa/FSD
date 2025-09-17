import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [a, seta] = useState("Nisa")
    var [b, setb]=useState("ami")

    const ChangeName = (e) => {
        console.log(e.target.value)
        seta(e.target.value)
    }

    const ClickName= () => {

        setb(a)
    }

    return (
        <div>
            <h1>Welcome {b}</h1> 
            <TextField variant='outlined' onChange={ChangeName} />
            <br /><br />
            <Button variant='contained' onClick={ClickName} >Click</Button>
        </div>
    )
}

export default StateBasics
