import {SignIn} from '@/components/auth'
import {useLoginMutation, useMeQuery} from "@/services/auth/auth/auth.service.ts";
import {Navigate} from "react-router-dom";

export const Login = () => {
    const {isError, isLoading} = useMeQuery()
    const isAuthenticated = !isError
    const [logIn] = useLoginMutation()

    if ({isLoading}) return (<div>Loading....</div>)
    if (isAuthenticated) return <Navigate to={'/'} replace={true}/>
    return <SignIn onSubmit={logIn}/>
}
