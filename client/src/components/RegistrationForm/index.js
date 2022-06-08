import React, { useState } from 'react';

import useStyles from './styles';
import InputText from '../InputFields/InputText';
import InputEmail from '../InputFields/InputEmail';
import InputPassword from '../InputFields/InputPassword';
import InputConfirmPassword from '../InputFields/InputConfirmPassword';
import InputSubmit from '../InputFields/InputSubmit';

export default function RegistrationForm() {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
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

                <InputText 
                    value={values.fullName}
                    onHandleChange={handleChange}
                    onSubmitted={submitted}
                    />
                <InputEmail 
                    value={values.email}
                    onHandleChange={handleChange}
                    onSubmitted={submitted} />
                <InputPassword
                    value={values.password}
                    showPassword={values.showPassword}
                    onHandleChange={handleChange}
                    onShowPassword={handleClickShowPassword}
                    customSpan={true}
                    onSubmitted={submitted} />
                <InputConfirmPassword
                    value={values.confirmPassword}
                    showPassword={values.showPassword}
                    onHandleChange={handleChange}
                    onShowPassword={handleClickShowPassword}
                    onSubmitted={submitted} />
                <InputSubmit
                    value="Sign up"
                    onHandleClick={handleSubmit} />
            </form>
        </>
    )
}
