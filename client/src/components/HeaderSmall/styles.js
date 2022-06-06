import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appHeaderSmall: {
        marginBottom: '25px',
        height: '40px',
        position: 'relative'
    },
    backLink: {
        fontSize: '22px',
        color: '#358FC4',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '0'
    }
});

export default useStyles;