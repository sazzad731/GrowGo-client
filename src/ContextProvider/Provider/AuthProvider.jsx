import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import {auth} from "../../firebase/firebase.config"

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState();
  const [ loading, setLoading ] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUserEmailPass = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginEmailPassword = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const loginWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const handleUpdateProfile = (updatedData)=>{
    return updateProfile(auth.currentUser, updatedData);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
  }, [])

  console.log(user)

  const userInfo = {
    user,
    loading,
    createUserEmailPass,
    handleUpdateProfile,
    loginEmailPassword,
    loginWithGoogle,
  };
  return (
    <AuthContext value={userInfo}>{children}</AuthContext>
  );
};

export default AuthProvider;