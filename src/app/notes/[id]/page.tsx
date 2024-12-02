import Note, { NoteId, NoteType } from '@/notes/note';

async function getNote(noteId: NoteId) {
	// since it is dynamic route, it won't automatically cache every request
	const res = await fetch(`http://127.0.0.1:8090/api/collections/Notes/records/${noteId}`, {
		// but we can use: ISR => Incremental Static Regeneration
		// by adding revalidate
		// it will regenerate page on the server if it is older than 10 seconds
		next: { revalidate: 10 },
		// pages can also be prerendered with "generateStaticParams"
		// it runs at build time before the corresponding Layouts or Pages are generated.
		// It will not be called again during revalidation (ISR)
	});
	const data = await res.json();

	return data as NoteType;
}

// params passes params ID from the URL
export default async function NotePage({ params }: any) {
	const note = await getNote(params.id);

	// add error testing for one note
	// TODO: add Error handling
	if (note.id === 'sew4zwh9y0r2tdk') throw Error(); // Title --> Ledo Quatro

	return (
		<main>
			<h1>Notes/{note.id}</h1>
			<Note note={note} />
		</main>
	);
}
