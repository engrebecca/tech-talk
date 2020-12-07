import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    marginTop: 20
  },
  image: {
    backgroundImage: 'url(https://www.uschamber.com/co/uploads/images/_w622h415/inclusive-workplace.jpg)',
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
    paddingTop: 20
  },
  text: {
    fontFamily: [
      'Comfortaa',
      'cursive',
    ].join(','),
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
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

          <Typography variant="h4" className={classes.text} gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="subtitle" className={classes.text}>
            Our goal is for you to ask questions, exchange ideas, and connect with each other. We’re creating a space for you to share not just what you do, but who you are to build a better you! We want to provide the tools and connections that women in technology need to own their futures.
          </Typography>
        </div>
      </Grid>
    </Grid>


  );
}