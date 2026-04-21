import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Firestore
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  writeBatch,
} from 'firebase/firestore';

import { getAnalytics, setUserId } from 'firebase/analytics';

// Variable declarations
const app = initializeApp();
const db = getFirestore();
const auth = getAuth();
const analytics = getAnalytics();

// Exports
export {
  db,
  auth,
  app,
  analytics,
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
