import { POSTS_QUERY } from './graphql';
import { useQuery } from '@apollo/client';

type PostProps = {
  id: number;
  title: string;
  body: string;
  userId: string;
};

export const Posts = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY);

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
        {data.posts.map((item: PostProps) => {
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
