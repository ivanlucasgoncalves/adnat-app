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
        padding: '8px 15px',
        marginBottom: '25px',
        '& svg': {
            fontSize: '16px',
            color: '#FFFFFF',
            marginRight: '7px',
        }
    }
});

export default useStyles;