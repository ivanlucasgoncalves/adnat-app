import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import HeaderSmall from '../../components/HeaderSmall';
import RegistrationForm from '../../components/RegistrationForm';

import useStyles from './styles';

export default function Registration() {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <Grid container justify="center" style={{ height: '100vh' }}>
                <Grid item>
                    <HeaderSmall />
                    <h1 style={{ marginBottom: 0 }}>Registration</h1>
                    <p style={{ marginTop: '5px' }}>We need to know a few things to get you ready to play.</p>
                    <span className={classes.message}>
                        <FontAwesomeIcon icon={faInfoCircle} />Learn how we use the data you provide us.</span>
                    <main className={classes.appMain}>
                        <RegistrationForm />
                    </main>
                </Grid>
            </Grid>
        </Container>
    )
}
