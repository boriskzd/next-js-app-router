import Link from 'next/link';
import Note from './note';
import { NoteType } from './note';

// data fetching is done directly inside components, since they are by default Server components
async function getNotes() {
	// fetch API
	const res = await fetch('http://127.0.0.1:8090/api/collections/Notes/records?page=1&perPage=30', {
		cache: 'no-store',
	});
	const data = await res.json();

	return data?.items as NoteType[];
}

export default async function NotesPage() {
	const notes = await getNotes();

	return (
		<div>
			<h1>Notes</h1>
			{notes?.map((note) => {
				return (
					// generate clickable notes
					// clicking on notes visits individual note page
					<Link href={`/notes/${note.id}`} key={note.id}>
						<Note note={note} />
					</Link>
				);
			})}
		</div>
	);
}
