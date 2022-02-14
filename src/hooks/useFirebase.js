import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

// initialize firebase
initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //google sign in
    const googleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    // email sign up
    const emailSignUp = (email,password,name) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            setUser({email,password,displayName:name})

            // set name
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {

            }).catch((error) => {

            });

            // ...
          })
          .catch((error) => {
            
          });
    }

   // email sign in
   const emailSingIn = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in 
      setUser(result.user);
      // ...
    })
    .catch((error) => {
      
    });
   }

    // Log out
    const logOut = () => {
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          });
    }

    // Observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              
            } else {
              setUser({})
            }
          });
    },[]);

    return{
        user,
        googleSignIn,
        logOut,
        emailSignUp,
        emailSingIn
    }
}
export default useFirebase;