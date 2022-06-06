import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SignInButton = styled(Button)({
    backgroundColor: '#4B9F5C',
    color: '#FFFFFF',
    textTransform: 'initial',
    justifyContent: 'end',
    boxShadow: 'none',
    padding: '13px 22px',
    '&:hover': {
        backgroundColor: '#4B9F5C',
    }
});

export default SignInButton;