import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: '🔺 Next - App Router 🔺',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{/* Global Navbar */}
				<nav style={{ background: '#3A6D8C', color: 'rgba(255,255,255,.7)', padding: 20 }}>
					<Link href='/' style={{ padding: 20, border: '1px solid rgba(255,255,255,.5)' }}>
						Home
					</Link>
					<Link href='/notes' style={{ padding: 20, border: '1px solid rgba(255,255,255,.5)' }}>
						Notes
					</Link>
					<Link href='/about' style={{ padding: 20, border: '1px solid rgba(255,255,255,.5)' }}>
						About
					</Link>
				</nav>
				{children}
				{/* Global Footer */}
				<footer style={{ background: '#3A6D8C', color: 'rgba(255,255,255,.7)', padding: 20 }}>Footer</footer>
			</body>
		</html>
	);
}
