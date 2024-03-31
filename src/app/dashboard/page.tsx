
//import {getServerSession} from "next-auth";

import { auth } from "../api/auth/[...nextauth]/auth";

export default function Page() {
  const session = auth();
  //console.log(session.user);


    return (
      <main>
        <h1>dashboard</h1>
        <a href="/api/auth/signout">sign out</a>
        <a href="/">public route</a>
      </main>
    );
  }