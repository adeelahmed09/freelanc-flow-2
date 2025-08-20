"use client"
import { SessionProvider } from "next-auth/react"
import store from "@/store/store.js"
import { Provider } from "react-redux"

export default function AuthProvider({
    children
}) {
    return (
        <Provider store={store}>
            <SessionProvider >
                {children}
            </SessionProvider>
        </Provider>
    )
}