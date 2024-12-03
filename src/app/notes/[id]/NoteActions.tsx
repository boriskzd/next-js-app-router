'use client';

import { useRouter } from 'next/navigation';

import { NoteType } from '@/notes/note';

interface NoteActionsProps {
	note: NoteType;
	onEdit: () => void;
}

export default function NoteActions({ note, onEdit }: NoteActionsProps) {
	// object destructuring with a fallback
	// If note is null or undefined, it will fallback to an empty object, preventing errors and assigning undefined to the destructured variables.
	const { id } = note || {};

	const router = useRouter();

	const handleEdit = async () => {
		console.log('Edit: - ', id);

		onEdit();
	};

	const handleDelete = async () => {
		console.log('Delete: - ', note.id);

		// Fetch
		await fetch(`http://127.0.0.1:8090/api/collections/Notes/records/${id}`, {
			method: 'DELETE',
		});

		// Refreshes the current route, re-fetching data from PocketBase and re-rendering Server Components.
		// The client merges the updated React Server Component payload without losing client-side state (e.g., useState) or browser state (e.g., scroll position).

		// TODO: DOESN'T WORK, FIX IT!
		router.refresh();
	};

	return (
		<div className='p-1 pt-3 flex gap-2'>
			<button
				type='button'
				onClick={handleEdit}
				className='bg-green-800 hover:bg-green-600 text-white p-2 rounded text-sm w-1/2'
			>
				Edit
			</button>
			<button
				type='button'
				onClick={handleDelete}
				className='bg-rose-950 hover:bg-rose-800 text-white p-2 rounded text-lg w-1/2'
			>
				Delete
			</button>
		</div>
	);
}
