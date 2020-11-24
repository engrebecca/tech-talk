import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import WorkOutlineSharpIcon from '@material-ui/icons/WorkOutlineSharp';
import ComputerIcon from '@material-ui/icons/Computer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        flexGrow: 1,
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
    }
}));

export default function UserCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://i.pinimg.com/originals/2e/2f/ac/2e2fac9d4a392456e511345021592dd2.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Username
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Location
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph><AccountCircleSharpIcon />Bio: <span>This is the user bio</span></Typography>
                    <Typography paragraph><span><WorkOutlineSharpIcon /></span>Org: <span>This is the user's org</span></Typography>
                    <Typography paragraph><span><ComputerIcon /></span>Github: <span>This is the user's Github</span></Typography>
                    <Typography paragraph><span><LanguageSharpIcon /></span>Website: <span>This is the user's website</span></Typography>
                    <Grid container spacing={1}>
                        {/* Bio */}
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><AccountCircleSharpIcon /></Paper>
                        </Grid>
                        <Grid item xs={9}>
                            <Paper className={classes.paper}>This is the user bio</Paper>
                        </Grid>
                        {/* Org */}
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={9}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        {/* GitHub */}
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={9}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        {/* Website */}
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={9}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                    </Grid>
                </CardContent>
            </Collapse >
        </Card >
    );
}