import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mock Interviewer App",
  description: "Prepare for your next tech interview with our mock interviewer app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen bg-gradient-to-r from-blue-500 to-purple-600`}>
          <header className="p-4 flex justify-between items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              Mock Interviewer
            </Link>
            <nav>
              <SignedOut>
                <Link href="/signin" passHref>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                    Sign In
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </nav>
          </header>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}