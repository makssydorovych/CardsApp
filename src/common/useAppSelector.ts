import { TypedUseSelectorHook, useSelector } from 'react-redux'
import {RootState} from "@/services/store.ts";



export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector