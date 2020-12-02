import React, { useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { UserContext } from "../../utils/UserContext";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    marginBottom: 20,
    backgroundColor: "#9e9e9e"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { logout } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <img className = "logo" src="https://i.ibb.co/ctthk2R/TECH-TALK" width="65" height="65" alt="TECH-TALK-10" border="0"></img>
            <NavLink to="/" exact> Home </NavLink>
            <NavLink to="/members"> Members </NavLink>
            <NavLink to="/profile"> Profile</NavLink>
          </Typography>
          {/* <NavLink to="/profile"> Profile </NavLink> */}
          <Button onClick={() => {
            logout()
          }}> Logout </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

