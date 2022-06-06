import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Inter',
            'Roboto',
            '"Helvetica Neue"',
        ].join(','),
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundColor: '#5CBD6F',
                    color: '#FFFFFF',
                },
                h1: {
                    fontSize: '40px',
                    fontWeight: '800'
                }
            },
        },
        MuiInputLabel: {
            root: {
                color: 'white',
                "&$focused": {
                    color: 'white',
                }
            }
        },
        MuiInput: {
            root: {
                color: 'white',
                "&$focused": {
                    "color": "white"
                }
            },
            underline: {
                '&:before': {
                    borderBottom: '2px solid white',
                },
                '&:after': {
                    borderBottom: '2px solid white',
                },
                '&:hover': {
                    '&:not(.Mui-disabled)': {
                        '&:before': {
                            borderBottom: '2px solid white',
                        }
                    }
                }
            }
        },
        MuiIconButton: {
            root: {
                color: 'inherit',
            }
        }
    },
});

export default theme;