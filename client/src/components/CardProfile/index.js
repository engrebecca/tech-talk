import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardMedia, CardContent, CardActions, Typography, Paper, Grid } from '@material-ui/core';
// import Avatar from '@material-ui/core/Avatar';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMoreSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import WorkOutlineSharpIcon from '@material-ui/icons/WorkOutlineSharp';
import ComputerIcon from '@material-ui/icons/Computer';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import "./style.css";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        flexGrow: 1,
        margin: 30,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    marginAutoItem: {
        margin: 'auto',
    }
}));

export default function UserCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root, classes.marginAutoItem}>
            {/* User Image */}
            <CardMedia
                className={classes.media}
                image={props.photo}
                title="User image"
            />
            {/* User name, title, location */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.firstName} {props.lastName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.role}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <LocationOnSharpIcon className="icon" /> {props.loc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/* <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                > */}
                    {/* <ExpandMoreIcon /> */}
                {/* </IconButton> */}
            </CardActions>
            {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
                <CardContent>
                    <Grid container spacing={1}>
                        {/* Bio */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper} ><AccountCircleSharpIcon className="icon" />{props.bio}</Paper>
                        </Grid>
                        {/* Org */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper} ><WorkOutlineSharpIcon className="icon" />{props.org}</Paper>
                        </Grid>
                        {/* GitHub */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper} ><ComputerIcon className="icon" /><a href={props.github} target="_blank" rel="noopener noreferrer">{props.github}</a></Paper>
                        </Grid>
                        {/* Website */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper} ><LanguageSharpIcon className="icon" /><a href={props.website} target="_blank" rel="noopener noreferrer">{props.website}</a></Paper>
                        </Grid>
                    </Grid>
                </CardContent>
            {/* </Collapse > */}
        </Card >
    );
}