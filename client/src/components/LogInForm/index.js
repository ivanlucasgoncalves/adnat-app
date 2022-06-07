import React, { useState } from 'react';
import {
	Link
} from "react-router-dom";

import useStyles from './styles';

import InputEmail from '../InputFields/InputEmail';
import InputSubmit from '../InputFields/InputSubmit';
import InputPassword from '../InputFields/InputPassword';

export default function LogInForm() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }

    const handleSubmit = (event) => {
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
                <InputPassword
                    value={values.password}
                    onHandleChange={handleChange}
                    onShowPassword={handleClickShowPassword}
                    showPassword={values.showPassword}
                    onSubmitted={submitted} />
                <Link 
                    to="/forgot-password"
                    className={classes.forgotLink}>Forgot your password?</Link>
                <InputSubmit 
                    onHandleClick={handleSubmit} />

            </form>
        </>
    )
}
