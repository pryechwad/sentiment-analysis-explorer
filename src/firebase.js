import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

// Demo configuration - replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDemo-replace-with-your-actual-key",
  authDomain: "sentiment-demo.firebaseapp.com",
  projectId: "sentiment-demo",
  storageBucket: "sentiment-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:demo-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// For development, you can use the auth emulator
if (import.meta.env.DEV) {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099');
  } catch (error) {
    // Emulator already connected or not available
  }
}

export default app;