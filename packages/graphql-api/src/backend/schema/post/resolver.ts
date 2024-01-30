import { createBaseResolver, Resolver } from '@exogee/graphweaver';
import { RestBackendProvider } from '@exogee/graphweaver-rest';

import { Post as RestPost } from '../../entities';
import { Post } from './entity';
import { fetch } from '../../rest-client';

@Resolver(() => Post)
export class PostResolver extends createBaseResolver<Post, RestPost>(
  Post,
  new RestBackendProvider('Post', {
    find: async () => {
      const results = await fetch<RestPost>(`/posts`);

      return results;
    },
  }),
) {}
