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
    spanOr: {
        fontSize: '15px',
        textAlign: 'center',
        display: 'block',
        margin: '30px 0',
        position: 'relative',
        zIndex: '0',
        '& span': {
            paddingLeft: '15px',
            paddingRight: '15px',
            backgroundColor: '#F5F9FD',
        },
        "&::after": {
            content: "''",
            width: '100%',
            height: '1px',
            backgroundColor: '#171F28',
            position: 'absolute',
            top: '50%',
            left: '0',
            zIndex: '-1',
        },
    },
    registerBlock: {
        backgroundColor: '#FFFFFF',
        padding: '15px',
        color: '#171F28',
        '& a': {
            color: '#358FC4',
            textDecoration: 'none',
            fontWeight: 'bold'
        }
    }
});

export default useStyles;