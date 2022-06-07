import {
	Link
} from "react-router-dom";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../../components/Header';
import LogInForm from '../../components/LogInForm';
import useStyles from './styles';

export default function Login() {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <Grid container justifyContent="center" style={{ height: '100vh' }}>
                <Grid item>
                    <Header />
                    <main className={classes.appMain}>
                        <LogInForm />
                        <span className={classes.spanOr}>
                            <span>Or</span>
                        </span>
                        <div className={classes.registerBlock}>
                            <p>Don't have an account? <Link to="/registration">Sign up now.</Link></p>
                        </div>
                    </main>
                </Grid>
            </Grid>
        </Container>
    )
};
