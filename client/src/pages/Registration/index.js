import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HeaderSmall from '../../components/HeaderSmall';
import RegistrationForm from '../../components/RegistrationForm';

import useStyles from './styles';

export default function Registration() {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <Grid container justifyContent="center" style={{ height: '100vh' }}>
                <Grid item>
                    <HeaderSmall />
                    <h1>Sign Up</h1>
                    <main className={classes.appMain}>
                        <RegistrationForm />
                    </main>
                </Grid>
            </Grid>
        </Container>
    )
}
