import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
const product = () => {
  var[user,setuser]=useState([])
  axios.get("https://fakestoreapi.com/products")
  .then((res)=>{ 
    console.log(res.data)
    setuser(res.data)
  })
  
  return (
    <div>
      <Grid container spacing={1}>
      {user.map((val)=>{
                return(
         <Card sx={{ maxWidth: 340 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">buy</Button>
        <Button size="small">details</Button>
      </CardActions>
    </Card>
    )
    })}
    </Grid>
    </div>
  )
}

export default product