import NoteActions from '@/notes/[id]/NoteActions';

export type NoteType = {
	id: string;
	created: string;
	title: string;
	field: string;
	updated?: string;
	collectionId?: string;
	collectionName?: string;
};

export type NoteId = Pick<NoteType, 'id'>;

interface NoteProps {
	note: NoteType;
	actionButtons?: boolean;
}

export default function Note({ note, actionButtons }: NoteProps) {
	// object destructuring with a fallback
	// If note is null or undefined, it will fallback to an empty object, preventing errors and assigning undefined to the destructured variables.
	const { title, field, created, id } = note || {};

	return (
		<div
			style={{
				display: 'inline-block',
				border: '2px solid #3A6D8C',
				borderRadius: 5,
				width: 200,
				margin: 10,
				padding: 5,
			}}
		>
			<h2>{title}</h2>
			<p>{field}</p>
			<p>Created: {created}</p>
			<small>ID: {id}</small>

			{/* If we are on a note page, display Edit and Delete buttons */}
			{actionButtons && <NoteActions note={note} />}
		</div>
	);
}
