import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SubmitButton = styled(Button)({
    backgroundColor: '#FFFFFF',
    color: '#4B9F5C',
    textTransform: 'initial',
    boxShadow: 'none',
    padding: '13px 22px',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '25px',
    '&:hover': {
        backgroundColor: '#FFFFFF',
    }
});

export default SubmitButton;