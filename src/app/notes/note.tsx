import Link from 'next/link';

export type NoteType = {
	id: number;
	created: string;
	title: string;
	field: string;
};

interface NoteProps {
	note: NoteType;
}

export default function Note({ note }: NoteProps) {
	console.log(note);
	console.log(note.title);
	const { title, field, created, id } = note || {};

	return (
		<div style={{ display: 'inline-block', border: '1px solid pink', width: 200, margin: 20 }}>
			<h2>{title}</h2>
			<p>{field}</p>
			<p>Created: {created}</p>
			<small>ID: {id}</small>
		</div>
	);
}
