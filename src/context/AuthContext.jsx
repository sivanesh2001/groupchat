import { createContext, useState, useContext, useEffect } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true)

  // Sign in with Google
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
 

  // sigout..
  const signOutWithGoogle=()=>signOut(auth) ;

  const value = {
    currentUser,
    setCurrentUser,
    signInWithGoogle,
    signOutWithGoogle
  };
///set currentuser..
useEffect (()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=> {
        setCurrentUser(user);
        setLoading(false);
        console.log(user);
    });
    return unsubscribe;
},[]) ;
  return (
    <AuthContext.Provider value={value}>
      {!loading&&children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
