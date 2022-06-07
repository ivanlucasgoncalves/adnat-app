import React, { useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import SubmitButton from '../../styles/global';

import useStyles from './styles';

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

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleFormSubmit = async (event) => {
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
                <FormControl fullWidth>
                    <InputLabel 
                        htmlFor="your-name"
                    >Your name</InputLabel>
                    <Input
                        id="your-name"
                        type="text"
                        value={values.fullName}
                        onChange={handleChange('fullName')}
                    />
                    {submitted && !values.fullName && <span id='name-error' style={{ fontSize: '12px' }}>Please enter your name</span>}
                </FormControl>
                
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
                    {submitted && !values.email && <span id='email-error' style={{ fontSize: '12px' }}>Please enter an email address</span>}
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
                    {submitted && !values.password && <span id='password-error' style={{ fontSize: '12px' }}>Please enter your password</span>}
                    <span style={{ marginTop: '5px', fontSize: '12px' }}>( 6 characters minimum )</span>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel 
                        htmlFor="confirm-password"
                    >Password Confirmation</InputLabel>
                    <Input
                        id="confirm-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.confirmPassword}
                        onChange={handleChange('confirmPassword')}
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
                    {submitted && !values.confirmPassword && <span id='password-error' style={{ fontSize: '12px' }}>Please confirm your password</span>}
                </FormControl>
                <SubmitButton 
                    fullWidth
                    size="large"
                    onClick={handleFormSubmit}>
                    Sign up
                </SubmitButton>
            </form>
        </>
    )
}
