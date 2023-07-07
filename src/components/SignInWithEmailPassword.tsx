import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firestore.config';
import { useState } from 'react';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useSetAtom } from 'jotai';
import { authModalState } from '@/store/authModalAtom';

const LogIn: React.FC = () => {
  const setAuthModalState = useSetAtom(authModalState)
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })
  const [signInWithEmailAndPassword, user, loading, fbError] =
    useSignInWithEmailAndPassword(auth)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    signInWithEmailAndPassword(loginForm.email, loginForm.password)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" w="full">
        <Input
          required
          name="email"
          placeholder="email"
          type="email"
          onChange={handleChange}
          size="md"
        />
        <Input
          required
          name="password"
          placeholder="password"
          type="password"
          onChange={handleChange}
          size="md"
          my={3}
        />

        {fbError && (
          <Text textAlign="center" color="red" fontSize="10pt">
            {fbError.message}
          </Text>
        )}

        <Button type="submit" isLoading={loading} my={3}>
          Log In
        </Button>
      </Flex>
    </form>
  )
}
export default LogIn