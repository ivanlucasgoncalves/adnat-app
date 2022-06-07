import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

export default function InputEmail( props ) {
    return (
        <FormControl fullWidth>
            <InputLabel 
                htmlFor="email"
            >Email address</InputLabel>
            <Input
                id="email"
                type="email"
                value={props.value}
                onChange={props.onHandleChange( 'email' )}
            />
            {props.onSubmitted && !props.value && <span id='name-error' style={{ fontSize: '12px' }}>Please enter your email address</span>}
        </FormControl>
    )
}
