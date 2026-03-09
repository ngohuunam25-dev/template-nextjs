import { CredentialsAuhorizeType } from "@/types/auth";
import moment from "moment";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: CredentialsAuhorizeType | undefined, req) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/authentication/send-sign-in-code`,
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: {
                "Content-Type": "application/json",
                "Company-Code": String(process.env.NEXT_PUBLIC_COMPANY_CODE),
                "x-forwarded-for": credentials?.requestIp ?? "",
                "User-Agent": credentials?.userAgent ?? "",
              },
            },
          );
          const dataRes = await res.json();

          // If no error and we have user data, return it
          if (res.ok && dataRes) {
            return {
              ...dataRes.user,
              access_token: dataRes.token.accessToken,
              refresh_token: dataRes.token.refreshToken,
              expires_at: moment()
                .add(2, "hours")
                .format("DD/MM/YYYY HH:mm:ss"),
            };
          } else {
            throw new Error(dataRes?.message || "Invalid email or password");
          }
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  session: {},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
