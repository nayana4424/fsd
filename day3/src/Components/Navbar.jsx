import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     
        <AppBar color='secondary'><br></br>
            <Toolbar>
                <Typography variant='h6'>my app3</Typography>
                &nbsp;
                <Link to='/s'>
                <Button variant='contained'>State</Button>
                </Link> &nbsp;  &nbsp;
                <Link to='/count'>
                <Button variant='contained'>Counter</Button>
      </Link>
      &nbsp;&nbsp;
      <Link to='/name'>
      <Button variant='contained'>Name</Button>
      </Link>
            </Toolbar>
        </AppBar> <br></br>
    </div>
  )
}

export default Navbar