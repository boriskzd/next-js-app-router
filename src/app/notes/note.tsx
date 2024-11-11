import Link from 'next/link';

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

export interface NoteProps {
	note: NoteType;
	isLink: boolean;
}

export default function Note({ note, isLink }: NoteProps) {
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
		<div
			style={{
				display: 'inline-block',
				border: '2px solid #3A6D8C',
				borderRadius: 5,
				width: 220,
				margin: 10,
			}}
			className='p-2'
		>
			{/* generate clickable notes 
				clicking on notes visits individual note page */}
			{isLink ? <Link href={`/notes/${id}`}>{noteCardContent}</Link> : <>{noteCardContent}</>}
			<div className='flex w-full space-x-2 mt-2'>
				<button className='w-1/2 px-4 rounded bg-gray-700 hover:bg-slate-500'>Edit</button>
				<button
					onClick={handleDelete()}
					className='w-1/2 px-4 rounded bg-gray-900 hover:bg-rose-950 border-solid border-2 border-rose-950'
				>
					Delete
				</button>
			</div>
		</div>
	);
}
