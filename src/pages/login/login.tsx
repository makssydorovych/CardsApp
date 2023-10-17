import { SignIn } from '@/components/auth'
import {useLoginMutation} from "@/services/auth/auth/auth.service.ts";

export const Login = () => {
  const[logIn] = useLoginMutation()
  return <SignIn onSubmit={logIn} />
}
