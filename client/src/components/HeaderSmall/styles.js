import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appHeaderSmall: {
        marginBottom: '25px',
        height: '40px',
        position: 'relative',
        '& img': {
            width: '127px',
            height: '40px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
        }
    },
    backLink: {
        fontSize: '22px',
        color: '#FFFFFF',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '0'
    }
});

export default useStyles;