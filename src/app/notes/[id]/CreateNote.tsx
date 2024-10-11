'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {
	const [title, setTitle] = useState('');
	const [field, setField] = useState('');

	// The useRouter hook allows you to programmatically change routes inside Client Components.
	// ! React hooks have to be called at the top level of the component, not inside any event handler or function !
	const router = useRouter();

	const create = async (e: FormEvent) => {
		// don't refresh web page when form is submitted
		e.preventDefault();
		console.table({ Title: title, Field: field });

		// Fetch
		await fetch('http://127.0.0.1:8090/api/collections/Notes/records', {
			method: 'POST',
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

		// Refreshes the current route, re-fetching data from PocketBase and re-rendering Server Components.
		// The client merges the updated React Server Component payload without losing client-side state (e.g., useState) or browser state (e.g., scroll position).
		router.refresh();
	};

	return (
		<form onSubmit={create} style={{ width: 300, padding: 10, border: '1px solid pink', marginBottom: 10 }}>
			<h3>Add New Note</h3>
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
			<button type='submit' style={{ width: '100%', border: '1px solid pink' }}>
				Create Note
			</button>
		</form>
	);
}
