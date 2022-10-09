import { useEffect } from "react"
import {useTimeout} from "./useTimeout"

export function useDebounce(callback, delay, dependencies) {
    const [reset, clear] = useTimeout(callback, delay) //masalah render dah solved yang pertama kali panggil
    useEffect(()=>reset, [dependencies])
    useEffect(()=>clear, []);
}
