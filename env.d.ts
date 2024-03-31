//
//💡Typescript tip
// To get intellisense and type safety for your environment variables, create a env.d.ts file at the root of your project and declare the types for process.env. Now you will have intellisense when typing process.env.{variable}.
//
declare namespace NodeJS {
    interface ProcessEnv {
      AUTH_SECRET: string;
      AUTH_GOOGLE_ID: string;
      AUTH_GOOGLE_SECRET: string;
    }
  }