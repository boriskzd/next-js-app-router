'use client';

/* Global Navbar */

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
	const pathname: string = usePathname();

	const isBasePathSame = (url: string, path: string) => {
		const basePath = url.split('/')[1];
		return basePath === path;
	};

	return (
		<nav id='navbar'>
			<Link href='/' className={`navbarLink ${pathname === '/' ? 'active' : ''}`}>
				Home
			</Link>
			<Link href='/notes' className={`navbarLink ${isBasePathSame(pathname, 'notes') ? 'active' : ''}`}>
				Notes
			</Link>
			<Link href='/about' className={`navbarLink ${pathname === '/about' ? 'active' : ''}`}>
				About
			</Link>
		</nav>
	);
}
