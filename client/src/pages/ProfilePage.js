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
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));
function ProfilePage() {
    const classes = useStyles();
    const [members, setMember] = useState([]);
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
            <Container component="main" maxWidth="sm">
                <div className={classes.root}>
                    {/* <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    > */}
                        {/* Create a card to display each member user's info */}
                        {members.map(member => {
                            return (
                                <div className={classes.paper}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={12} key={member.id}>
                                            {/* // Pass props to the card component to render each user's individual information */}
                                            <CardUser bio={member.bio} email={member.email} firstName={member.firstName} lastName={member.lastName} loc={member.location} org={member.organization} photo={member.photo} role={member.role} website={member.website} github={member.github}>
                                            </CardUser>
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        })}
                    {/* </Grid> */}
             
                </div>
            </Container>
            
        </div>
    );
};
export default ProfilePage;