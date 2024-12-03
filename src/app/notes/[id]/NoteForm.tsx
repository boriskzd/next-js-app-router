'use client';
import { useEffect, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { NoteType } from '@/notes/note';

interface NoteFormProps {
	note?: NoteType;
	createOrEdit: 'create' | 'edit';
	onEdit?: () => void;
}

export default function NoteForm({ note, createOrEdit, onEdit }: NoteFormProps) {
	const isEdit = createOrEdit === 'edit';
	const tempTitle = isEdit ? note?.title : '';
	const tempField = isEdit ? note?.field : '';

	const [title, setTitle] = useState(tempTitle);
	const [field, setField] = useState(tempField);

	useEffect(() => {
		isEdit ? console.log('it is Edit!') : console.log('it is Create!');
		console.log(note);

		// Optional cleanup function
		return () => {
			console.log('Cleanup on component unmount: NOTE FORM');
		};
	}, []);

	const noteId = isEdit ? note?.id : '';
	const method = isEdit ? 'PATCH' : 'POST';
	const formTitle = isEdit ? 'Edit Note' : 'Add New Note';
	const buttonText = isEdit ? 'Save Changes' : 'Create Note';

	// The useRouter hook allows you to programmatically change routes inside Client Components.
	// ! React hooks have to be called at the top level of the component, not inside any event handler or function !
	const router = useRouter();

	const create = async (e: FormEvent) => {
		// don't refresh web page when form is submitted
		e.preventDefault();
		console.table({ Title: title, Field: field });

		// Fetch
		await fetch(`http://127.0.0.1:8090/api/collections/Notes/records${'/' + noteId}`, {
			method: method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title,
				field,
			}),
		});
		// ↑↑↑ can aslo be done by:
		// const pb = new PocketBase('http://127.0.0.1:8090');
		// const record = await pb.collection('Notes').create( {"title": "aaaa", "field": "bbbb" } );

		// clear input fields in form
		setTitle('');
		setField('');

		isEdit && onEdit && onEdit();

		// Refreshes the current route, re-fetching data from PocketBase and re-rendering Server Components.
		// The client merges the updated React Server Component payload without losing client-side state (e.g., useState) or browser state (e.g., scroll position).
		router.refresh();
	};

	return (
		<form
			onSubmit={create}
			style={{ width: 300, padding: 10, border: '2px solid #3A6D8C', borderRadius: 5, margin: 10 }}
		>
			<h3>{formTitle}</h3>
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Title'
				style={{ color: 'black', width: '100%' }}
			/>
			<input
				type='text'
				value={field}
				onChange={(e) => setField(e.target.value)}
				placeholder='Field'
				style={{ color: 'black', width: '100%' }}
			/>
			<button
				type='submit'
				style={{
					width: '100%',
					border: '2px solid #3A6D8C',
					borderRadius: 5,
					backgroundColor: '#3A6D8C',
					color: 'rgba(255,255,255,.7)',
				}}
			>
				{buttonText}
			</button>
		</form>
	);
}
