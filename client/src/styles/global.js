import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SubmitButton = styled(Button)({
    backgroundColor: '#358FC4',
    color: '#FFFFFF',
    textTransform: 'initial',
    boxShadow: 'none',
    padding: '13px 22px',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '25px',
    '&:hover': {
        backgroundColor: '#358FC4',
    }
});

export default SubmitButton;