import { useEffect, useState } from "react"
import { getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut } from "@firebase/auth";
import initializeAuthentication from "../../firebase/firebase.init";


initializeAuthentication();
const useFirebase = () =>{
    const [user,setUser]= useState(null);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInUsingGoogle =()=>{
        return signInWithPopup(auth,googleProvider)
        
    }

    const logout=()=>{
        signOut(auth)
        .then(()=>{
            setUser(null);
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth,(user)=>{
       if(user){
           setUser(user);
       }
       else {
           setUser(null);
       }
        })
        return ()=> unsubscribe;
    },[]) 

    return{
        user,
        signInUsingGoogle,logout,setUser
    }



}

export default useFirebase;