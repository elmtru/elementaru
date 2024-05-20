export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/404": [13],
		"/acknowledgements": [15],
		"/api": [16],
		"/(demos)/bohr-atoms": [4,[2]],
		"/changelog": [17],
		"/(demos)/color-bar": [5,[2]],
		"/(demos)/color-scales": [6,[2]],
		"/contributing": [18],
		"/(demos)/element-color-schemes": [7,[2]],
		"/(demos)/element-tile": [8,[2]],
		"/(demos)/molecule": [9,[2]],
		"/mp-[slug]": [19],
		"/(demos)/nucleus": [10,[2]],
		"/(demos)/periodic-table": [11,[2]],
		"/(demos)/structure": [12,[2]],
		"/[slug]": [~14]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';