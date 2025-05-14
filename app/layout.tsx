import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
    title: 'My MERN App',
    description: 'A MERN stack application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}