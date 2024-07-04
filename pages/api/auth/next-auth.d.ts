import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      steam: any;
    } & DefaultSession['user'];
  }
}
