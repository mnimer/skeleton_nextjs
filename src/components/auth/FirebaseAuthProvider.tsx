"use client"

import React from "react";
import { signInWithCustomToken, getAuth } from "firebase/auth";
import { Session } from "next-auth";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import {app, auth, db, functions} from '../../firebase';

async function syncFirebaseAuth(session: Session) {
    if( session && session.firebaseToken ){
     try{
        var firebaseApp  = app;
         await signInWithCustomToken(getAuth(), session.firebaseToken);
     }catch(error){
         console.error(error);
     }
    }else{
     getAuth().signOut();
    }
 }

function FirebaseAuthProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const {data: session} = useSession();
    
    useEffect(() => {
        if( !session ) return;

        syncFirebaseAuth(session);
    }, [session]);
  
    return <>{children}</>;
}

export default FirebaseAuthProvider

