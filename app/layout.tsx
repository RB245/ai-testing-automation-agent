import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from '@clerk/nextjs';
import "./globals.css";
import type { Metadata } from "next";
import Provider from './provider';

export const metadata: Metadata = {
  title: "Next.js Premium Startup Boilerplate",
  description: "Created using the ultimate interactive Next.js stack generator CLI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <ClerkProvider>
          <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', borderBottom: '1px solid #eaeaea' }}>
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>
          </header>
          <Provider>
            {children}
          </Provider>
        </ClerkProvider>
      </body>
    </html>
  );
}
