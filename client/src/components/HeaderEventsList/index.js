import React from 'react';
import {
	Link
} from "react-router-dom";

import logoSmall from '../../assets/logo-small.png';

import useStyles from './styles';

export default function HeaderEventsList() {
    const classes = useStyles();
    return (
        <header className={classes.appHeaderEventsList}>
            <Link 
                to="/"
                className={classes.logoLink}><img src={logoSmall} alt="Logo" /></Link>
        </header>
    )
};
