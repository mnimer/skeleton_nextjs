//
//💡Typescript tip
// To get intellisense and type safety for your environment variables, create a env.d.ts file at the root of your project and declare the types for process.env. Now you will have intellisense when typing process.env.{variable}.
//
//TODO: create .env file with these properties
declare namespace NodeJS {
    interface ProcessEnv {
      AUTH_SECRET: string;
      AUTH_GOOGLE_ID: string;
      AUTH_GOOGLE_SECRET: string;
      
      // Generate service account for Firebase and pull these values from the downloaded json
      FIREBASE_PROJECT_ID: string;
      FIREBASE_CLIENT_EMAIL: string;
      FIREBASE_PRIVATE_KEY: string;
    }
  }
