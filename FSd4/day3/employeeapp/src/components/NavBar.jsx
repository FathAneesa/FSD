import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
      <Toolbar>
<h1>EmployeeApp</h1>&nbsp;
<Link to='/view'>
    <Button variant='contained'>View</Button></Link>&nbsp;&nbsp;
<Link to='/add'>
    <Button variant='contained'>Add</Button>&nbsp;</Link>
      </Toolbar>
     </AppBar>

    </div>
  )
}

export default NavBar