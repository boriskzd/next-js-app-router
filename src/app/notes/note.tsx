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
	// object destructuring with a fallback
	// If note is null or undefined, it will fallback to an empty object, preventing errors and assigning undefined to the destructured variables.
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
