import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import {auth} from "../../firebase/firebase.config"

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState();
  const [ loading, setLoading ] = useState(true);

  const createUserEmailPass = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
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
  };
  return (
    <AuthContext value={userInfo}>{children}</AuthContext>
  );
};

export default AuthProvider;