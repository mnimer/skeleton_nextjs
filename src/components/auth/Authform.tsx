'use client';

import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import GoogleIcon from './GoogleIcon';

interface Props {
  session: Session | null;
}

export default function AuthForm({ session }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent form submission from refreshing the page
    //todo login with Firebase
  };

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/dashboard' });
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <div className="p-4 mx-auto rounded-md w-[22rem] h-[7rem] shadow-lg">
      {!session && (
        <>
          <button onClick={handleGoogleSignIn} className="w-full mt-4">
            <GoogleIcon />
            Login with Google
          </button>
        </>
      )}

      {session && (
        <div className="flex flex-col justify-between h-full">
          <img
            src="/logo.png"
            alt="auth.js logo"
            className="self-center w-3/4 flex-1 object-contain"
          />
          <button onClick={handleSignOut} className="w-full mt-4">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}