import { FC } from 'react';

interface GreetingProps {
  name?: string;
}

const Greeting: FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name || 'World'}!</h1>;
};

export default Greeting;
