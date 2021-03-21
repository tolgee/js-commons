import {Box, makeStyles} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    root: {
        border: "1px solid #000",
        minHeight: "50px"
    }
});
export const Details = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>

        </Box>
    );
}