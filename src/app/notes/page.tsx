import Note from './note';
import { NoteType } from './note';

async function getNotes() {
	// const res = await fetch('http://127.0.0.1:8090/api/collections/Notes/records');
	const res = await fetch('http://127.0.0.1:8090/api/collections/Notes/records?page=1&perPage=30', {
		cache: 'no-store',
	});
	const data = await res.json();

	return data?.items as NoteType[];
}

export default async function NotesPage() {
	console.log(' - - - - - ');
	console.log('Notes Page');
	const notes = await getNotes();

	return (
		<div>
			<h1>Notes</h1>
			{notes?.map((note) => {
				return <Note note={note} key={note.id} />;
			})}
		</div>
	);
}
