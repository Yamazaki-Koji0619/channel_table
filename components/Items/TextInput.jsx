import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {

    return (
        <TextField
            className={props.style}
            fullWidth={props.fullWidth}
            label={props.label}
            margin="dense"
            multiline={props.multiline}
            required={props.required}
            rows={props.rows}
            value={props.value}
            variant="outlined"
            type={props.type}
            onChange={props.onChange}
        />
    )
}

export default TextInput;