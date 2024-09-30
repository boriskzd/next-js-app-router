// Configuration file for Next.js

/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		// remove all console calls, except 'error', 'info', 'warn' since they are important
		// removeConsole: process.env.NodeDev === "production"
		// ----- UNCOMMENT CODE BELOW TO REMOVE console.xxx() MESSAGES -----
		// removeConsole: {
		// 	exclude: ['error', 'info', 'warn'],
		// },
	},
};

export default nextConfig;
