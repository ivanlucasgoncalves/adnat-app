import React from 'react';
import {
	Link
} from "react-router-dom";

import logoSmall from '../../assets/logo-small.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import useStyles from './styles';

export default function HeaderSmall() {
    const classes = useStyles();
    return (
        <header className={classes.appHeaderSmall}>
            <Link 
                to="/"
                className={classes.backLink}><FontAwesomeIcon icon={faArrowLeft} /></Link>
            <img src={logoSmall} alt="Logo" />
        </header>
    )
}
