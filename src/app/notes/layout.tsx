import { Metadata } from 'next';
import { titleMeta } from '../lib/constants';

export const metadata: Metadata = {
	title: `${titleMeta} - Notes`,
};

export default function NotesLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<h1>Notes Layout</h1>
			{children}
		</section>
	);
}
