import React, { useState } from 'react';

import InputEmail from '../InputFields/InputEmail';
import InputSubmit from '../InputFields/InputSubmit';

import useStyles from './styles';

export default function ResetPassword() {
    const [values, setValues] = useState({
        email: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    const classes = useStyles();

    return (
        <>
            <form 
                noValidate 
                autoComplete="off" 
                className={classes.appForm}>

                <InputEmail 
                    value={values.email}
                    onHandleChange={handleChange}
                    onSubmitted={submitted} />
                <InputSubmit
                    value="Send reset password link"
                    onHandleClick={handleSubmit} />
            </form>
        </>
    )
}
