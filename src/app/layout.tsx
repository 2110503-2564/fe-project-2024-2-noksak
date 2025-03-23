import TopMenu from "@/components/TopMenu";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata = {
  title: "Event Venue Booking",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextAuthSession = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
        <NextAuthProvider session={nextAuthSession}>
          <TopMenu />
          {children}
        </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}