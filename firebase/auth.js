
import {
    db,
    auth,
    provider,
    GoogleAuthProvider,
    signInWithPopup,
    serverTimestamp,
    doc,
    setDoc,
    collection, 
    addDoc, 
    query, 
    where, 
    getDocs,
    
} from "./config";


const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    await saveUserDataToFirestore(user);

    // ...
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  };


}


const saveUserDataToFirestore = async (user) => {
  try {
    const userRef = doc(db, "users", user.uid);
    
    const userData = {
      uid: user.uid,
      name: user.displayName || "",
      email: user.email || "",
      picture: user.photoURL || "",
      createdAt: serverTimestamp(),
    };

    // Add a small retry/delay to ensure auth state is fully propagated
    await setDoc(userRef, userData, { merge: true });
    console.log('User document successfully saved/updated in Firestore');
  } catch (error) {
    if (error.code === 'permission-denied') {
      console.warn('PERMISSION DENIED: Could not save user data, but continuing login...', error.message);
      // We don't throw here so the user can still log in
      return;
    }
    console.error('Error saving user to Firestore:', error);
    throw error;
  }
};

export { signInWithGoogle , saveUserDataToFirestore};