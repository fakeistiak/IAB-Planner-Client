import { createContext } from "react";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const googleSignIn = () => {
      console.log("hello Mom")
    }
    const AuthInfo = {
        googleSignIn,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;