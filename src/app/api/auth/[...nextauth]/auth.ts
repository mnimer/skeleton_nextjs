
import { FirestoreAdapter } from '@auth/firebase-adapter';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import {adminDb} from '../../../../../firebase-admin';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Google],
  session: {
    strategy: 'jwt'
  },
  adapter: FirestoreAdapter(adminDb),
  pages: {
    signIn: '/auth',
    signOut: '/auth',
  },
});