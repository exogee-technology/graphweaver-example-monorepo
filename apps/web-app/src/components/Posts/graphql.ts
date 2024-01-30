import { gql } from '@apollo/client';

const POSTS_QUERY = gql`
  query posts {
    posts {
      id
      title
      body
      userId
    }
  }
`;

export { POSTS_QUERY };
