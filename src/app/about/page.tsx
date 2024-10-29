import { Metadata } from 'next';
import { titleMeta } from '../lib/constants';

export const metadata: Metadata = {
	title: `${titleMeta} - About`,
};

export default function About() {
	return (
		<main>
			<h1>About</h1>
		</main>
	);
}
