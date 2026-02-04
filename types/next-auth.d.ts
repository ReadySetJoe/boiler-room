import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      steam: {
        steamid: string;
        personaname: string;
        profileurl?: string;
        avatar: string;
        avatarmedium?: string;
        avatarfull?: string;
      };
      twitch?: {
        sub: string;
        preferred_username?: string;
        email?: string;
        accessToken?: string;
      };
    } & DefaultSession['user'];
  }

  interface JWT {
    id: string;
    steam: Session['user']['steam'];
    twitch?: Session['user']['twitch'];
  }

  interface Profile {
    id: string;
    provider: string;
    email?: string;
    name?: string;
    image?: string;
    steamid?: string;
    personaname?: string;
    profileurl?: string;
    avatar?: string;
    avatarmedium?: string;
    avatarfull?: string;
  }
}
