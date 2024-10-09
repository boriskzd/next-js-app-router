import Note from './../note';
import { NoteType } from './../note';

async function getNote(noteId: string) {
	const res = await fetch(`http://127.0.0.1:8090/api/collections/Notes/records/${noteId}`, {
		// since it is dynamic route, it won't automatically cache every request
		// but we can use: ISR => Incremental Static Regeneration
		// by adding revalidate
		// it will regenerate page on the server if it is older than 10 seconds
		next: { revalidate: 10 },
	});
	const data = await res.json();

	return data as NoteType;
}

// params passes params ID from the URL
export default async function NotePage({ params }: any) {
	const note = await getNote(params.id);

	return (
		<div>
			<h1>Notes/{note.id}</h1>
			<Note note={note} />
		</div>
	);
}
