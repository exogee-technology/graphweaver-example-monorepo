/* graphql-api Graphweaver Project */
import 'reflect-metadata';
import Graphweaver from '@exogee/graphweaver-server';
import { resolvers } from './schema';

export const graphweaver = new Graphweaver({
	resolvers,
	fileAutoGenerationOptions: {
		watchForFileChangesInPaths: ['../../apps/web-app'],
	},
});

export const handler = graphweaver.handler();
