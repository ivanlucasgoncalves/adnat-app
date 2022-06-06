import React from 'react';

import useStyles from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
    const classes = useStyles();
    return (
        <header className={classes.appHeader}>
            <img src={logo} alt="Logo" />
        </header>
    )
};
