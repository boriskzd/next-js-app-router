/* Global Navbar */

import Link from 'next/link';

export default function NavBar() {
	return (
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
	);
}
