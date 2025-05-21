import React, { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState();
  const userInfo = {
    user
  }
  return (
    <AuthContext value={userInfo}></AuthContext>
  );
};

export default AuthProvider;