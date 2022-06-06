import React from 'react';

import useStyles from './styles';

export default function Header() {
    const classes = useStyles();
    return (
        <header className={classes.appHeader}>
            <h1 className={classes.customLogo}>Adnat</h1>
        </header>
    )
};
