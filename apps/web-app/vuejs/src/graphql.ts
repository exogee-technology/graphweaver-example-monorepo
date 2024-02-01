import gql from 'graphql-tag'

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
