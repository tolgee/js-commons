import {Box, makeStyles} from "@material-ui/core";
import React, {useState} from "react";


const useStyles = makeStyles({
    root: {
        border: "1px solid #000",
        minHeight: "50px",
        cursor: "text"
    },
    input: {
        width: 0,
        overflow: "hidden",
        opacity:0,
        filter:"alpha(opacity=0)",
    }
});
export const TextInput = () => {
    const [value, setValue] = useState("");
    const classes = useStyles();
    const hiddenInputRef = React.createRef<HTMLInputElement>();

    const handleClick = () => {
        hiddenInputRef.current?.focus();
    }

    const handleInputCursorChange = (input: HTMLInputElement) => {
        console.log(input.selectionStart);
    }

    return (
        <Box contentEditable className={classes.root} onClick={handleClick}>
        </Box>
    );
}