'use client';

import NoteId from './Note';

interface NoteProps {
	noteId: typeof NoteId;
}

export default function Note({
	noteId,
}: // handleEdit, handleDelete
NoteProps) {
	// object destructuring with a fallback
	// If note is null or undefined, it will fallback to an empty object, preventing errors and assigning undefined to the destructured variables.
	const { title, field, created, id } = note || {};
	console.log(isLink);

	const noteCardContent = (
		<div className=''>
			<h2>{title}</h2>
			<p>{field}</p>
			<p>Created: {created}</p>
			<small>ID: {id}</small>
		</div>
	);

	const handleDelete = () => {
		console.log('DELETE', id);
	};

	return (
		<div className='flex w-full space-x-2 mt-2'>
			<button className='w-1/2 px-4 rounded bg-gray-700 hover:bg-slate-500'>Edit</button>
			<button
				onClick={handleDelete}
				className='w-1/2 px-4 rounded bg-gray-900 hover:bg-rose-950 border-solid border-2 border-rose-950'
			>
				Delete
			</button>
		</div>
	);
}
