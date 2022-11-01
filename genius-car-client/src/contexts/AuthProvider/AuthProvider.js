import React, { Children, createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // const userInfo = { displayName: "R" };

  const authInfo = { user, loading };
  // const authInfo = { user, loading, userInfo };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
