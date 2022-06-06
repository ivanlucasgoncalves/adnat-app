import React, { useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

import SubmitButton from '../../styles/global';

import useStyles from './styles';

export default function ResetPassword() {
    const [values, setValues] = useState({
        email: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const classes = useStyles();

    return (
        <>
            <form 
                noValidate 
                autoComplete="off" 
                className={classes.appForm}>
                <FormControl fullWidth>
                    <InputLabel 
                        htmlFor="email"
                    >Your email</InputLabel>
                    <Input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <SubmitButton 
                    fullWidth
                    size="large">
                    Send reset password link
                </SubmitButton>
            </form>
        </>
    )
}
