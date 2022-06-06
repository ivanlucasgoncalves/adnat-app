import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HeaderEventsList from '../../components/HeaderEventsList';

import useStyles from './styles';

import logo from '../../assets/super-futsal.png';

export default function EventsLists() {
    const classes = useStyles();

    return (
        <Container maxWidth="xs">
            <Grid container justify="center" style={{ height: '100vh' }}>
                <Grid item className={classes.gridContainer}>
                    <HeaderEventsList />
                    <main className={classes.appMain}>
                        <div className={classes.customLogo}><img src={logo} alt="Logo" /></div>
                        <h1 style={{ marginBottom: 0, color: 'black', textAlign: 'center' }}>Super Futsal</h1>
                        <p style={{ marginTop: '5px', color: 'black', textAlign: 'center' }}>Futsal Fun for Everyone!</p>
                    </main>
                </Grid>
            </Grid>
        </Container>
    )
};
