import { useSignInWithGoogle  } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firestore.config';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

const SignInWithProvider: React.FC = () => {
  const [signInWithGoogle, user, loading, fbError] = useSignInWithGoogle(auth)

  return (
    <div className='container'>
      <Flex>
        <Button isLoading={loading} onClick={() => signInWithGoogle()}>
          Continue with Google
        </Button>
        {fbError && (
          <Text textAlign="center" color="red" fontSize="10pt">
            {fbError.message}
          </Text>
        )}
      </Flex>
    </div>
  )
}
export default SignInWithProvider