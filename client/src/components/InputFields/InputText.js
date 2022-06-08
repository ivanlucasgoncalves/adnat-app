import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

export default function InputText( props ) {
    return (
        <FormControl fullWidth>
            <InputLabel 
                htmlFor="your-name"
            >Your name</InputLabel>
            <Input
                id="your-name"
                type="text"
                value={props.value}
                onChange={props.onHandleChange( 'fullName' )}
            />
            {props.onSubmitted && !props.value && <span id='name-error' style={{ fontSize: '12px' }}>Please enter your name</span>}
        </FormControl>
    )
}
