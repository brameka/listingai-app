"use client"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/config/firestore.config';
import SignUp from '@/components/SignUp';
import { useState } from 'react';

const Register = () => {
    return (
        <SignUp />
    )
}

export default Register;

