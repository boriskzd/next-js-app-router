import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { titleMeta } from './lib/constants';

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
	title: titleMeta,
	description: 'Note App - Next.js App Router',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NavBar /> {/* Global NavBar  */}
				<main>{children}</main>
				<Footer /> {/* Global Footer  */}
			</body>
		</html>
	);
}
