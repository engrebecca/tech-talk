import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import CardUser from "../components/CardUser";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));

function ProfilePage() {
    const classes = useStyles();
    const [member, setMember] = useState([]);

    useEffect(() => {
        loadMember()
    }, []);

    function loadMember() {
        API.User.getUser()
            .then(res => {
                console.log(res.data)
                setMember(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Navbar />
            <Container>
                <div className={classes.root}>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        {/* Create a card to display each member user's info */}
                    
                                <Grid item xs={2}></Grid>
                                    <Grid item sm={8} key={member.id}>
                                    {/* // Pass props to the card component to render each user's individual information */}
                                    <CardUser bio={member.bio} email={member.email} firstName={member.firstName} lastName={member.lastName} loc={member.location} org={member.organization} photo={member.photo} role={member.role} website={member.website} github={member.github}>

                                    </CardUser>
                                </Grid>
                                <Grid item xs={2}></Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default ProfilePage;