import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
