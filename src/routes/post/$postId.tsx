import { createFileRoute } from '@tanstack/react-router';

const RouteComponent = () => {
  const { postId } = Route.useParams();

  return (
    <div>
      <h1>Post {postId}</h1>
      <p>Here is the content of post {postId}</p>
    </div>
  );
};

export const Route = createFileRoute('/post/$postId')({
  component: RouteComponent,
  loader: () => console.log('loading...'), // here we can fetch data later
});
