import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>Signup page</h1>
        <TextField label="Username" variant="filled" /><br />
        <TextField label="Email" variant='filled'/><br />
        <TextField label="Phone Number" variant="filled" /><br />
        <TextField label="Password" variant="filled" /><br /><br />
        <Button variant="contained">Sign Up</Button>

        

        
    </div>
  )
}

export default Signup