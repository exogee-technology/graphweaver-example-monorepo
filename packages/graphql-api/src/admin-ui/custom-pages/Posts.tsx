import React from 'react';
import { gql, useQuery } from '@apollo/client';

const postsQuery = gql`
  query Posts {
    posts {
      id
      title
      userId
      body
    }
  }
`;

export const Posts = () => {
  const { loading, error, data } = useQuery(postsQuery);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>body</th>
          <th>userId</th>
        </tr>
      </thead>
      <tbody>
        {data.posts.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>{item.userId}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
