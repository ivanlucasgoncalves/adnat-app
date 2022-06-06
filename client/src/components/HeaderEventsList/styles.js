import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appHeaderEventsList: {
        marginBottom: '25px',
        height: '40px',
        position: 'relative',
        '& img': {
            width: '127px',
            height: '40px',
        }
    },
    logoLink: {
        display: 'inline-block'
    }
});

export default useStyles;