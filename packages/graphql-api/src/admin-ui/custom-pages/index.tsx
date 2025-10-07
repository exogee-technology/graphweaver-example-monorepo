import React from 'react';
import { Posts } from './Posts';

export const customPages = {
	routes: () => [
		{
			path: '/posts',
			element: <Posts />,
		},
	],
};
