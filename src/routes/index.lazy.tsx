import { createLazyFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

const Index = () => {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
};

export const Route = createLazyFileRoute('/')({
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Index />
    </Suspense>
  ),
});
