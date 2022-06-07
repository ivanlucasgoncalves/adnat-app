import SubmitButton from '../../styles/global';

export default function InputSubmit( props ) {
    return (
        <SubmitButton 
            fullWidth
            size="large"
            onClick={props.onHandleClick}>
            Log in
        </SubmitButton>
    )
}
