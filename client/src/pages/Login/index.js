import React from 'react';
import {
	Link
} from "react-router-dom";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../../components/Header';
import LogInForm from '../../components/LogInForm';
import SignInSocialButtons from '../../components/SignInSocialButtons';
// import axios from 'axios';
import useStyles from './styles';

export default function Login() {
    // const [result, setResult] = useState('');
    // const status = () => {
    //     axios.get('./api/current_user').then(res => { setResult(res.data._id);})
    // }
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <Grid container justify="center" style={{ height: '100vh' }}>
                <Grid item>
                    <Header />
                    <main className={classes.appMain}>
                        <LogInForm />
                        <span className={classes.spanOr}>
                            <span>Or</span>
                        </span>
                        <SignInSocialButtons />
                        <div className={classes.registerBlock}>
                            <p>Don't have an account? <Link to="/registration">Register now.</Link></p>
                        </div>
                        {/* <button onClick={status}>Check log in status</button>
                        <div>{result ? result : 'NOT LOGGED'}</div>
                        <button><a href="/api/logout">logout</a></button> */}
                    </main>
                </Grid>
            </Grid>
        </Container>
    )
};
