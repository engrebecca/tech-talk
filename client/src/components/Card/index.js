import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        </Card>
    );
}