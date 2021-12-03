import type { NextPage } from 'next'

import { Flex, Button, Stack} from '@chakra-ui/react'
import {SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Input } from '../components/Form/Input'

type SingInFormData = {
  email: string;
  password: string;
}

const signInformSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
})

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInformSchema)
  })


const { errors } = formState

  const handleSignIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
   <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center" 
      justifyContent="center"
    >
     <Flex as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
     >
        <Stack spacing="4">
         <Input 
    
          type="email" 
          label="E-mail"
          error={errors.email}
          {...register('email')} 
        />
         <Input
          type="password" 
          label="Password"
          error={errors.password}
          {...register('password')} 
        />
        </Stack>

       <Button 
        type="submit" mt="6" 
        colorScheme="red"
        size="lg"
        isLoading={formState.isSubmitting}
      >
        Login
      </Button>
     </Flex>
   </Flex>
  )
}

export default SignIn
