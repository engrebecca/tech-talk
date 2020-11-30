import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
  },
  image: {
    backgroundImage: 'url(https://entrepreneur.indiegogo.com/education/wp-content/uploads/sites/4/2019/05/Soft-Skills-for-Crowdfunding.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export default function About() {
  const classes = useStyles();

  return (

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            About Tech Talk
          </Typography>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
     </Grid>
    
     
  );
}