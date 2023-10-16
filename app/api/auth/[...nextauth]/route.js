import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.Google_ID,
            clientSecret: process.env.Google_Client_Secret,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {

    }
})
export { handler as GET, handler as POST }