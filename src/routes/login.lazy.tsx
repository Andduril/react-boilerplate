import LoginForm from '@/components/forms/LoginForm';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

export const Route = createLazyFileRoute('/login')({
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <RouteComponent />
    </Suspense>
  ),
});

function RouteComponent() {
  return <LoginForm />;
}
