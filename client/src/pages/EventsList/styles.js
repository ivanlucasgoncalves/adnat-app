import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appMain: {
        backgroundColor: '#fff',
        paddingTop: '30px',
        borderRadius: '10px 10px 0 0',
        '& > *': {
            marginBottom: '15px',
            '&:last-child': {
                marginBottom: '0'
            }
        }
    },
    gridContainer: {
        width: '100%'
    },
    customLogo: {
        backgroundColor: '#fff',
        borderRadius: '50%',
        padding: '4px',
        display: 'block',
        width: '80px',
        position: 'relative',
        overflow: 'hidden',
        '& > img': {
            width: '80px',
            height: '80px',
            backgroundColor: '#000',
            borderRadius: '50%',
            position: 'relative',
            overflow: 'hidden',
            padding: '10px',
        }
    }
});

export default useStyles;