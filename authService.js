import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
