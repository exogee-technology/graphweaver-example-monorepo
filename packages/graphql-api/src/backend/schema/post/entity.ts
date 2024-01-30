import {
  GraphQLEntity,
  SummaryField,
  Field,
  ID,
  ObjectType,
} from '@exogee/graphweaver';

import { Post as RestPost } from '../../entities';

@ObjectType('Post')
export class Post extends GraphQLEntity<RestPost> {
  public dataEntity!: RestPost;

  @Field(() => ID)
  id!: string;

  @SummaryField()
  @Field(() => String)
  title!: string;

  @Field(() => String)
  body!: string;

  @Field(() => String)
  userId!: string;
}
