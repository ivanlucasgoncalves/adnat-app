import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import SignInButton from './styles';

export default function SignInSocialButtons() {
    return (
        <>
            <SignInButton 
                fullWidth
                size="large"
                href="/auth/facebook"
                startIcon={<FontAwesomeIcon icon={faFacebookF } />}>
                Sign in with Facebook
            </SignInButton>
            <SignInButton
                fullWidth
                size="large"
                href="/auth/google"
                startIcon={<FontAwesomeIcon icon={faGoogle } />}>
                    Sign in with Google
            </SignInButton>
        </>
    )
}
