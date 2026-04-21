import { initializeApp } from 'firebase/app';

// Auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';

const app = initializeApp();
const auth = getAuth();
const db = getFirestore();

const UserSignIn = () => {};
const UserSignUp = () => {};
const UserSignOut = () => {};
const UserPasswordReset = () => {};
const UserDisplayName = () => {};
const createNewSession = () => {};
const saveUserSession = () => {};
const loadUserSession = () => {};
const renameUserSession = () => {};
const deleteUserSession = () => {};
const searchAllSessions = () => {};

export {
  UserSignUp,
  UserSignIn,
  UserSignOut,
  UserPasswordReset,
  UserDisplayName,
  createNewSession,
  saveUserSession,
  loadUserSession,
  renameUserSession,
  deleteUserSession,
  searchAllSessions,
};
