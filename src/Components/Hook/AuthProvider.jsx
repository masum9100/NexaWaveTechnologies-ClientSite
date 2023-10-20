import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading]=useState(true)

    const googleSignIn = (value)=>{
        return signInWithPopup(auth, googleProvider)

    }

    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log("ok")
            setUser(currentUser)
            setLoading(false)
        })
        return(()=>{
            return unsubscribe()
        })
    }, [])

    const logOut =()=>{
        return signOut(auth)
    }


    const AuthInfo = {
        googleSignIn,
        signUp,
        signIn,
        user,
        loading,
        logOut,

    }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;