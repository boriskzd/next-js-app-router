'use client';
import { useState, FormEvent } from 'react';

export default function CreateNote() {
	const [title, setTitle] = useState('');
	const [field, setField] = useState('');

	const create = async (e: FormEvent) => {
		e.preventDefault();
		console.table({ Title: title, Field: field });
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
