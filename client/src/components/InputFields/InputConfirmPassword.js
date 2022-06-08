import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

export default function InputConfirmPassword( props ) {
    return (
        <FormControl fullWidth>
            <InputLabel 
                htmlFor="confirm-password"
            >Password Confirmation</InputLabel>
            <Input
                id="confirm-password"
                type={props.showPassword ? 'text' : 'password'}
                value={props.value}
                onChange={props.onHandleChange( 'confirmPassword' )}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={props.onShowPassword}
                    >
                    {props.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
            />
            {props.onSubmitted && !props.value && <span id='name-error' style={{ fontSize: '12px' }}>Please confirm your password</span>}
        </FormControl>
    )
}
