import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
// import CardUser from "../components/CardUser";
import CardProfile from "../components/CardProfile";
import { UserContext } from "../utils/UserContext";
import StickyFooter from "../components/StickyFooter";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#f3e5f5'
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));
function ProfilePage() {
    const classes = useStyles();
    const { user, login, logout, refreshUser } = useContext(UserContext);
    console.log(user);

    //need to get passport authentification (id) variable to put it in our profile page and use setUserId in a function 

    return (
        <div className={classes.root}>
            <Navbar />
            <Container component="main" maxWidth="sm">
                <div className={classes.root}>
                    {/* Card to display user's info */}
                    <div className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} key={user.id}>
                                {/* // Pass props to the card component to render each user's individual information */}
                                <CardProfile bio={user.bio} email={user.email} firstName={user.firstName} lastName={user.lastName} loc={user.location} org={user.organization} photo={user.photo} role={user.role} website={user.website} github={user.github}>
                                </CardProfile>
                            </Grid>
                        </Grid>
                    </div>


                </div>
            </Container>
            <StickyFooter />

        </div>
    );
};

export default ProfilePage;