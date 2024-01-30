import { BaseEntity, Field } from '@exogee/graphweaver-rest';

export class Post extends BaseEntity {
  @Field()
  id!: string;

  @Field()
  title!: string;

  @Field()
  body!: string;

  @Field()
  userId!: string;
}
