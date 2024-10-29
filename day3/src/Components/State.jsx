import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
  var[name,setname]=useState("nayana")
  var[val,setval]=useState()

  const handleInput =(e)=>{
  console.log(e.target.value)
  setname(e.target.value)
  }
  const Submit =()=>{
    setval(name)
  }
  return (
    <div>
        <Typography variant='h6'><br></br><br></br>
          Welcome {val}
        </Typography>
        <TextField variant='outlined'onChange={handleInput} label='enter name'/><br /><br />
<Button onClick={Submit}>submit</Button>
             </div>
  )
}

export default State