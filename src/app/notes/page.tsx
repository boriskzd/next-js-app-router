import PocketBase from 'pocketbase';
import Link from 'next/link';
import Note from './note';
import { NoteType } from './note';
import CreateNote from './[id]/CreateNote';

// ----- CACHING -----

// Next.js has variables for caching behavior and runtime, necessary if not using Fetch API !!!

// export const dynamic = 'auto',
//	 dynamicParams  = true,
//	 revalidate = 0,
//	 fetchCache = 'auto',
//	 runtime = 'nodejs',
//	 preferredRegion = 'auto'

// Route Segment Config options for configuring behavior of Page, Layout or Route Handler, by directly exporting the following variables
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config

// Change the dynamic behavior of a layout or page to fully static or fully dynamic.
export const dynamic = 'auto'; // The default option to cache as much as possible without preventing any components from opting into dynamic behavior.

// Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
export const dynamicParams = true; // Dynamic segments not included in generateStaticParams are generated on demand.

// Set the default revalidation time for a layout or page. This option does not override the revalidate value set by individual fetch requests.
export const revalidate = 0; // Ensure a layout or page is always dynamically rendered even if no dynamic functions or uncached data fetches are discovered.
// ↑↑↑ This option changes the default of fetch requests that do not set a cache option to 'no-store' but leaves fetch requests that opt into 'force-cache' or use a positive revalidate as is.

// By default, Next.js will cache any fetch() requests that are reachable before any dynamic functions are used and will not cache fetch requests that are discovered after dynamic functions are used.
// fetchCache allows you to override the default cache option of all fetch requests in a layout or page.
export const fetchCache = 'auto'; // The default option to cache fetch requests before dynamic functions with the cache option they provide and not cache fetch requests after dynamic functions.

// nodejs or edge
export const runtime = 'nodejs'; // (default)

// Support for preferredRegion, and regions supported, is dependent on your deployment platform.
// If a preferredRegion is not specified, it will inherit the option of the nearest parent layout.
// The root layout defaults to all regions.
export const preferredRegion = 'auto';

// ----- CACHING end -----

// data fetching is done directly inside components, since they are by default Server components
async function getNotes() {
	// PocketBase SDK - ORM, instead of Fetch API
	const pb = new PocketBase('http://127.0.0.1:8090');

	const data = await pb.collection('Notes').getList(1, 30);

	return data?.items as unknown as NoteType[];

	// Fetch API
	// previously we fetched with Fetch API, as seen here:

	// const res = await fetch('http://127.0.0.1:8090/api/collections/Notes/records?page=1&perPage=30', {
	// 	cache: 'no-store',
	// });
	// const data = await res.json();
	// return data?.items as NoteType[];
}

export default async function NotesPage() {
	const notes = await getNotes();

	return (
		<main>
			<h1>Notes</h1>
			{notes?.map((note) => {
				return (
					// generate clickable notes
					// clicking on notes visits individual note page
					<Link href={`/notes/${note.id}`} key={note.id}>
						<Note note={note} />
					</Link>
				);
			})}
			<CreateNote />
		</main>
	);
}
