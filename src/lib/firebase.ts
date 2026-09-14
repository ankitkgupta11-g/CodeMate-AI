import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// CRITICAL: The app requires firebaseConfig.firestoreDatabaseId as second parameter
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const OWNER_EMAILS = [
  'kajugupta1119@gmail.com',
  'ankitkgupta1123@gmail.com',
  'admin@codemate.ai',
  'owner@codemate.ai',
];

export function isUserOwner(email?: string | null): boolean {
  if (!email) return false;
  return OWNER_EMAILS.includes(email.toLowerCase().trim());
}

export function getOwnerDisplayName(email?: string | null, fallback?: string): string {
  if (!email) return fallback || 'Learner';
  const clean = email.toLowerCase().trim();
  if (clean === 'kajugupta1119@gmail.com' || clean === 'ankitkgupta1123@gmail.com') {
    return 'Ankit Gupta';
  }
  return fallback || 'Ankit Gupta';
}

export function mapFirebaseAuthError(error: any): {
  message: string;
  isOperationNotAllowed: boolean;
  isPopupCancelled: boolean;
} {
  const code = error?.code || '';
  if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
    return {
      message: '',
      isOperationNotAllowed: false,
      isPopupCancelled: true,
    };
  }
  if (code === 'auth/operation-not-allowed') {
    return {
      message: 'Email/Password sign-in is disabled in your Firebase project. Enable it in Firebase Console > Authentication > Sign-in method, or use "Continue with Google".',
      isOperationNotAllowed: true,
      isPopupCancelled: false,
    };
  }
  if (
    code === 'auth/invalid-credential' ||
    code === 'auth/wrong-password' ||
    code === 'auth/user-not-found'
  ) {
    return {
      message: 'Invalid email or password. If you do not have an account yet, switch to "Sign Up" above.',
      isOperationNotAllowed: false,
      isPopupCancelled: false,
    };
  }
  if (code === 'auth/email-already-in-use') {
    return {
      message: 'An account already exists with this email address. Please switch to "Sign In".',
      isOperationNotAllowed: false,
      isPopupCancelled: false,
    };
  }
  if (code === 'auth/network-request-failed') {
    return {
      message: 'Network connection issue. Please check your internet and try again.',
      isOperationNotAllowed: false,
      isPopupCancelled: false,
    };
  }
  if (code === 'auth/weak-password') {
    return {
      message: 'Password is too weak. Please use at least 6 characters.',
      isOperationNotAllowed: false,
      isPopupCancelled: false,
    };
  }
  if (code === 'auth/invalid-email') {
    return {
      message: 'Please enter a valid email address.',
      isOperationNotAllowed: false,
      isPopupCancelled: false,
    };
  }
  if (code === 'auth/too-many-requests') {
    return {
      message: 'Access temporarily locked due to multiple failed attempts. Please try again shortly or use Google Sign-In.',
      isOperationNotAllowed: false,
      isPopupCancelled: false,
    };
  }
  return {
    message: error?.message || 'Authentication failed. Please try again.',
    isOperationNotAllowed: false,
    isPopupCancelled: false,
  };
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Validation connection helper
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase connection check: offline or checking');
    }
  }
}
