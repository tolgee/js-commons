import {makeStyles} from "@material-ui/core";
import React from "react";
import {TextInput} from "./TextInput";
import {Details} from "./Details";

const useStyles = makeStyles({
    root: {
        border: "1px solid #000"
    }
});

export const MessageUI = () => {
    const classes = useStyles();

    return (
        <>
            <TextInput/>
            <Details/>
        </>
    );
}