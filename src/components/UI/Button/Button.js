import React from 'react';

import classes from './Button.css';

const button = (props) => {
    return (
        <button
            className={classes.Button}
            {...props}>
            <span>
                {props.children}
            </span>
        </button>
    );
}

export default button;