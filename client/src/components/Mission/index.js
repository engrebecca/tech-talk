import React from 'react';
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
    backgroundImage: 'url(https://static.ivanti.com/sites/marketing/media/images/blog/2018/03/women.in_.tech_-2.jpg)',
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

export default function Mission() {
  const classes = useStyles();

  return (

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Typography component="h1" variant="h3">
            Our Mission
          </Typography>
          <Typography component="p" variant="h6">
          Our goal is for you to ask questions, exchange ideas, and connect with each other. We’re creating a space for you to share not just what you do, but who you are to build a better you! We want to provide the tools and connections that women in technology need to own their futures.
          </Typography>
          
        </div>
      </Grid>
      </Grid>

  );
}