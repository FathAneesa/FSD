import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const NaBar = () => {
  return (
    <div>
        <AppBar>

            <Toolbar>
                <h6>MyApp</h6>&nbsp;

                <Link to='/login'>
                 <Button variant='contained'>Login</Button> </Link>&nbsp;

                <Link to='/signup'>
                 <Button variant='contained'>Sign Up</Button> </Link>&nbsp;

                <Link to='/gettable'>
                    <Button variant='contained'>Table</Button> </Link>

                <Link to='/state'>
                    <Button variant='contained'>State Basics</Button> </Link>
                
                <Link to='/counter'>
                    <Button variant='contained'>Counter</Button>  </Link>

                <Link to='/button'>
                    <Button variant='contained'>Buttons</Button>  </Link>

                <Link to='/product'>
                    <Button variant='contained'>Product</Button>  </Link>
    

               
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default NaBar;
