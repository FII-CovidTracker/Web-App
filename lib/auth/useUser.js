import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from './initFirebase'

import {
    setUserCookie,
    getUserFromCookie,
    removeUserCookie,
} from './userCookies'
import TRANSLATION from "../translation";

initFirebase();

const useUser = () => {
    const router = useRouter()
    const [user, setUser] = useState()

    const login = async (email, password, callback) => firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => callback(null, user))
        .catch(error => callback(error))

    const logout = async (callback) => firebase
        .auth()
        .signOut()
        .then(() => callback(null))
        .catch(error => callback(error))

    const mapUserData = async (user) => {
        const { uid, email } = user
        const token = await user.getIdToken(true)
        return {
            id: uid,
            email,
            token,
        }
    }

    useEffect(() => {
        // Firebase updates the id token every hour,
        // this makes sure the react state and the cookie are both kept up to date
        const cancelAuthListener = firebase
            .auth()
            .onIdTokenChanged(async (user) => {
                if (user) {
                    const userData = await mapUserData(user)
                    setUserCookie(userData)
                    setUser(userData)
                } else {
                    removeUserCookie()
                    setUser()
                }
            })

        const userFromCookie = getUserFromCookie()
        if (!userFromCookie) {
            router.push('/')
            return
        }
        setUser(userFromCookie)

        return () => cancelAuthListener()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { user, login, logout }
}

export { useUser }