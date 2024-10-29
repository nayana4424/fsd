import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Name = () => {
    var[x,setX] = useState();
    const input = ()=>{
        setX("React")
    } 
    const input2 = ()=>{
        setX("Angular")
    }
    const input3 = ()=>{
        setX("Next")
    }

  return (
    <div>&nbsp;&nbsp;<br></br><br></br>
       &nbsp;&nbsp; <Typography variant="h4">Welcome {x}</Typography>&nbsp;
        <Button variant="contained" color="primary" onClick={input}> REACT </Button>&nbsp;&nbsp;
        <Button variant="contained" color="secondary" onClick={input2}> ANGULAR</Button>&nbsp;&nbsp;
        <Button variant="contained" color="success" onClick={input3}> NEXT </Button>
    </div>
  )
}

export default Name