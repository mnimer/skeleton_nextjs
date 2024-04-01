"use client"

import { signOut } from "next-auth/react";

export default function Page() {  
  return (
    <main>
      <h1>dashboard</h1>
      <a onClick={() => signOut({ callbackUrl: '/' })}>sign out</a><br/>
      <a href="/">public route</a>
    </main>
  );
}