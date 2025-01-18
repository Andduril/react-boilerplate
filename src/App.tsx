import { Button } from "./components/ui/button";
import useCountStore from "./stores/countStore";

const App = () => {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);

  const handleClick = () => {
    increment();
  }

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl">React App</h1>
      <p className="text-4xl">Count: {count}</p>
      <Button onClick={handleClick}>Increment</Button>
    </main>
  );
};

export default App;
