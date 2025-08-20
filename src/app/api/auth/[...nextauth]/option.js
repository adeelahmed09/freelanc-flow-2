import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import User from "@/models/user.models"
import ConnectDB from "@/libs/ConnectDB";


export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                await ConnectDB()
                try {
                    const user = await User.findOne({
                        $or: [
                            { email: credentials.username },
                            { username: credentials.username }
                        ]
                    });
                    if (!user) {
                        throw new Error('No user found with this email or username!')
                    };
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    if (!isPasswordCorrect) {
                        throw new Error('Password is incorrect!')
                    };
                    return user;
                } catch (error) {
                    throw new Error(error)
                }
            }
        })
    ],
    pages: {
        signIn: "/log-in"
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user}) {
            if (user){
                token._id = user._id.toString()
                token.username = user.username
                token.email = user.email
                token.name = user.name 
            }
            return token
        },

        async session({ session ,token}) {
            if (token){
                session.user._id = token._id
                session.user.username = token.username
                session.user.email = token.email
                session.user.name = token.name
            }
            return session
        },
        
    }
}