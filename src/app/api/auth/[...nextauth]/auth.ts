
import { FirestoreAdapter } from '@auth/firebase-adapter';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import {adminAuth, adminDb} from '../../../../../firebase-admin';

//export const { handlers, auth } = NextAuth({ providers: [ Google ] })

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Google({
    clientId: process.env.AUTH_GOOGLE_ID!,
    clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    allowDangerousEmailAccountLinking: true,
  })],
  session: {
    strategy: 'jwt'
  },
  callbacks:{
    session: async ({session, token}) => {
      if(session?.user){
        if( token.sub ){
          session.user.id = token.sub;

          const firebaseToken = await adminAuth.createCustomToken(token.sub);
          session.firebaseToken = firebaseToken;
        }
      }
      return session;
    },
    jwt: async ({user, token}) => {
      if(user){
        token.sub = user.id;
      }
      return token;
    },
  },
  adapter: FirestoreAdapter(adminDb),
  pages: {
    signIn: '/auth',
    signOut: '/auth',
  },
});