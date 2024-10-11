import Note from './../note';
import { NoteType } from './../note';

// ----- CACHING -----

// Next.js has variables for caching behavior and runtime, necessary if not using Fetch !!!

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

async function getNote(noteId: string) {
	// since it is dynamic route, it won't automatically cache every request
	const res = await fetch(`http://127.0.0.1:8090/api/collections/Notes/records/${noteId}`, {
		// but we can use: ISR => Incremental Static Regeneration
		// by adding revalidate
		// it will regenerate page on the server if it is older than 10 seconds
		next: { revalidate: 10 },
		// pages can also be prerendered with "generateStaticParams"
		// it runs at build time before the corresponding Layouts or Pages are generated.
		// It will not be called again during revalidation (ISR)
	});
	const data = await res.json();

	return data as NoteType;
}

// params passes params ID from the URL
export default async function NotePage({ params }: any) {
	const note = await getNote(params.id);

	// add error testing for one note
	// TODO: add Error handling
	if (note.id === 'sew4zwh9y0r2tdk') throw Error();

	return (
		<div>
			<h1>Notes/{note.id}</h1>
			<Note note={note} />
		</div>
	);
}
