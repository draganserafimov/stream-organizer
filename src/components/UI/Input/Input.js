import React from 'react';

import classes from './Input.css';

const input = (props) => {
    return (
        <div className={classes.Input}>
            <input
                id={props.id}
                className={classes.Field}
                type={props.type}
                placeholder={props.placeholder}
                required={props.required}
                onChange={props.onChange} />
            <label
                className={classes.Label}
                htmlFor={props.id}>
                {props.placeholder}
            </label>
        </div>
    );
}

export default input;