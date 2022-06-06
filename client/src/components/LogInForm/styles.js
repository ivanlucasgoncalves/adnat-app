import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appForm: {
        '& > *': {
            marginBottom: '15px',
            '&:last-child': {
                marginBottom: '0'
            }
        }
    },
    forgotLink: {
        color: '#358FC4',
        textDecoration: 'none',
        display: 'inline-block'
    },
});

export default useStyles;