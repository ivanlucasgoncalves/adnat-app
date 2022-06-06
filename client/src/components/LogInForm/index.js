/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import {
	Link,
    Redirect
} from "react-router-dom";
import axios from 'axios';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import SubmitButton from '../../styles/global';

import useStyles from './styles';

export default function LogInForm() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const [valid, setValid] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        handleSubmit;
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handleSubmit = async (event) => {
        
        event.preventDefault();
        const { email, password } = values;

        if ( email && password ) {
            setValid(true);
            try {
                const res = await axios.post('/api/login', {
                    email: 'Flintstone',
                    password: '55577'
                });
                if( res.status === 200 ) {
                    setLogged(true);
                }
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        }
        setSubmitted(true);
    }

    const classes = useStyles();

    if ( logged ) {
        return <Redirect to="/events-list"/>;
    }

    return (
        <>
            <form 
                noValidate 
                autoComplete="off" 
                className={classes.appForm}>
                <FormControl fullWidth>
                    <InputLabel 
                        htmlFor="email"
                    >Email address</InputLabel>
                    <Input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                    {submitted && !values.email && <span id='name-error' style={{ fontSize: '12px' }}>Please enter your email address</span>}
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel 
                        htmlFor="password"
                    >Password</InputLabel>
                    <Input
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    {submitted && !values.password && <span id='name-error' style={{ fontSize: '12px' }}>Please enter your password</span>}
                </FormControl>
                <Link 
                    to="/forgot-password"
                    className={classes.forgotLink}>Forgot your password?</Link>
                <SubmitButton 
                    fullWidth
                    size="large"
                    onClick={handleSubmit}>
                    Log in
                </SubmitButton>
            </form>
        </>
    )
}
