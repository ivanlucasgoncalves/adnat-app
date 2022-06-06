import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appMain: {
        '& > *': {
            marginBottom: '15px',
            '&:last-child': {
                marginBottom: '0'
            }
        }
    },
    message: {
        backgroundColor: '#4B9F5C',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        padding: '7px 15px',
        marginBottom: '25px',
        '& svg': {
            marginRight: '5px'
        }
    }
});

export default useStyles;