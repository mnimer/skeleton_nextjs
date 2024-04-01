"use client"

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button"
 

export default function Page() {  
  return (
    <main>
      <h1>dashboard</h1>
      <a href="/">public route</a>
      <br/><br/>
      <Button onClick={() => signOut({ callbackUrl: '/' })}>Logout</Button>
    </main>
  );
}