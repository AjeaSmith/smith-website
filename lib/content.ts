// Edit this file to update the whole site.
export const profile = {
	name: "Ajea",
	title: "Full-stack web developer",
	location: "Ypsilanti, Michigan",
	intro:
		"I'm a web developer who enjoys building clean, reliable apps from front end to back end. I work mostly with React, Next.js, and TypeScript, with Supabase on the back end, and I'm always learning more. Take a look at what I've built below, and feel free to get in touch.",
	links: {
		github: "https://github.com/ajeasmith",
		linkedin: "https://www.linkedin.com/in/ajeasmith",
		email: "mailto:smithajea@rocketmail.com",
	},
};

export type Project = {
	name: string;
	summary: string;
	highlights: string[];
	stack: string[];
	demo?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		name: "NEONCORE",
		summary: "a sign-up form for NEONCORE, a competitive-gaming network",
		highlights: [
			"Validation that respects the user: checks on blur, then live on every keystroke, so errors never appear before someone has typed.",
			"Password strength meter: scored on length, mixed case, numbers, and symbols, mapped to Weak / Fair / Good / Strong.",
			"Linked fields: typing in the password re-validates the confirm field.",
			"Real submit states: invalid submit focuses the first error and announces “N fields need attention”; valid submit shows a loading state, then a success message with focus moved to its heading.",
			"Accessible by design: fully keyboard-operable, with screen reader announcements and visible focus states.",
			"Responsive: separate mobile and desktop layouts, plus an optional live Operator ID readout on desktop.",
		],
		stack: [
			"React",
			"Next",
			"Neon Postgres",
			"React Hook Form",
			"Tailwind v4",
			"Shadcn/ui",
			"Zod",
			"Vercel",
		],
		demo: "https://neon-gamer-signup.vercel.app/",
		repo: "https://github.com/AjeaSmith/neon-gamer-signup",
	},
	{
		name: "Billwise",
		summary:
			"An installable PWA that reminds you before bills are due and resets recurring bills automatically.",
		highlights: [
			"Push notifications via OneSignal, keyed to the Supabase user ID so no extra profiles table is needed",
			"Scheduled jobs with pg_cron and pg_net to reset bill cycles server-side",
			"Fixed subtle date bugs: timezone drift in days-until calculations and yearly recurrence edge cases",
			"In-app PWA update prompts so users never run a stale version",
		],
		stack: [
			"React",
			"Next",
			"Supabase",
			"TanStack Query",
			"Zod",
			"Tailwind v4",
			"PWA",
			"Vercel",
		],
		demo: "",
		repo: "",
	},
	{
		name: "Multi-tenant workspace app",
		summary:
			"A multi-tenant app with a Slack-style interface, where each organization gets an isolated workspace.",
		highlights: [
			"Tenant isolation designed at the database level",
			"Slack-inspired layout: sidebar navigation, channels, and fast switching between workspaces",
			"Typed end to end with TypeScript and Zod validation",
		],
		stack: [
			"Next.js",
			"React 19",
			"TypeScript",
			"Supabase",
			"TanStack Query",
			"Tailwind v4",
			"shadcn/ui",
		],
		demo: "",
		repo: "",
	},
];

export const skills = [
	"TypeScript",
	"React 19",
	"Next.js",
	"Tailwind CSS",
	"Supabase / Postgres",
	"TanStack Query",
	"Zod",
	"Vercel",
];
