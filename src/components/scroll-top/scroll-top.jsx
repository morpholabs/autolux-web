import React from 'react';
import { Zoom, useScrollTrigger } from '@material-ui/core';
import { useStyles } from './scroll-top.style';

export function ScrollTop(props) {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.container}>
                {children}
            </div>
        </Zoom>
    );
}
