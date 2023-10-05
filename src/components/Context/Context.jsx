import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config";

export const NewsContext = createContext(null)
const Context = ({ children }) => {
    const [news, setNews] = useState([])
    const [categories, setCategories] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('../news.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNews(data)
            })
    }, [])


    useEffect(() => {
        fetch('../categories.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)
            })
    }, [])

    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut
    const logOut = () => {
        return signOut(auth)
    }

    // onAuthState
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const values = {
        createUser,
        login,
        signOut,
        user,
        categories,
        news
    }
    return (

        <NewsContext.Provider value={values}>
            {children}
        </NewsContext.Provider>
    );
};

export default Context;