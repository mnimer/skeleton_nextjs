import NextAuth, { DefaultSession } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
    interface Session {
        firebaseToken?: string;
        user: {
            //add extra props here
        } & AdapterUser &
            DefaultSession["user"];
    }
}