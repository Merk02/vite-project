import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const SomeCard = ({ count }: { count: number }) => {
  return <div className="card">{count}</div>;
};

const CountButton = ({ count, setCount }: { count: number; setCount: any }) => {
  return (
    <button onClick={() => setCount((count: number) => count + 1)}>
      count is {count}
    </button>
  );
};
const sleep = (time) =>
  new Promise((res) => setTimeout(res, time, "done sleeping"));

const FunStuff = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function faiCose() {
      if (count !== 999) {
        await sleep(5000);
        setCount(999);
      }
    }
    faiCose();
  }, [count, setCount]);

  return (
    <>
      <CountButton count={count} setCount={setCount} />
      <SomeCard count={1} />
    </>
  );
};

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Example App</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <FunStuff />
      <div className="card">This is something else...</div>
    </>
  );
}

export default App;
