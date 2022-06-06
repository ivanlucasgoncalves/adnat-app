import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
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
                    backgroundColor: '#F5F9FD',
                    color: '#171F28',
                },
                h1: {
                    fontSize: '40px',
                    fontWeight: '800'
                }
            },
        },
        MuiInputLabel: {
            root: {
                color: '#171F28',
                "&$focused": {
                    color: '#171F28',
                }
            }
        },
        MuiInput: {
            root: {
                color: '#171F28',
                "&$focused": {
                    "color": "#171F28"
                }
            },
            underline: {
                '&:before': {
                    borderBottom: '2px solid #171F28',
                },
                '&:after': {
                    borderBottom: '2px solid #171F28',
                },
                '&:hover': {
                    '&:not(.Mui-disabled)': {
                        '&:before': {
                            borderBottom: '2px solid #171F28',
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