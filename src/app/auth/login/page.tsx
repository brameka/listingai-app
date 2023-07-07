"use client"
import LogIn from '@/components/SignInWithEmailPassword';
import SignInWithProvider from '@/components/SignInWithProvider';

const LoginPage = () => {
    return (
        <>
         <LogIn />
         <SignInWithProvider />
        </>
    )
}

export default LoginPage;

