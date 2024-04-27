// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  collection,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

//Hooks
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FirebaseContext = createContext(null);

// Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyBb0aJ_7-bVifbnXFZnNPwii9LqL_bywXY',
  authDomain: 'https://vaikunth-todo.netlify.app/',
  projectId: 'todo-app-58bdc',
  storageBucket: 'todo-app-58bdc.appspot.com',
  messagingSenderId: '699322598507',
  appId: '1:699322598507:web:e297c2615a354938199d2e',
  measurementId: 'G-39R5PMJVG8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Auth
const auth = getAuth(app);
//Auth Provider
const provider = new GoogleAuthProvider(app);
//FireStore database
const db = getFirestore(app);

function FirebaseProvider({ children }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Login Function
  const handleLogin = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate('/Dashboard');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Finding User if Already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate('/Dashboard');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Logging out
  const handleLogout = async () => {
    try {
      setUser(null);
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  };

  //Finding User in dataBase
  const findUserinDB = async function () {
    const docRef = doc(db, 'Users', `${user.email}`);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(doc(db, 'Users', `${user.email}`), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        ImgPath: user.photoURL,
      });
    }
  };

  //Creating Todo List
  const addTodos = function (data) {
    return setDoc(doc(db, `Users/${user.email}/Todos`, `${new Date()}`), data);
  };

  //Updating Todo List
  const updateTodos = function (id, data) {
    return updateDoc(doc(db, `Users/${user.email}/Todos`, `${id}`), data);
  };

  //Getting List from Database
  const getTodos = function () {
    return getDocs(collection(db, 'Users', `${user.email}`, 'Todos'));
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        handleLogin,
        handleLogout,
        addTodos,
        getTodos,
        findUserinDB,
        updateTodos,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

// Custom hook to get context Data
function useFirebase() {
  const context = useContext(FirebaseContext);
  if (context === undefined)
    throw new Error('Firebase context was used outside the FirebaseProvider');
  return context;
}

export { FirebaseProvider, useFirebase };
