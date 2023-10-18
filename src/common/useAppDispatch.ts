import { useDispatch } from 'react-redux'
import {AppDispatch} from "@/services/store.ts";



export const useAppDispatch: () => AppDispatch = useDispatch
