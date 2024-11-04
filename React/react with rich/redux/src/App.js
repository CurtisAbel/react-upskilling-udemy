import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { increment, decrement } from './store/counter/counter.actions';

import Counter from './Counter'

function App() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);
  console.log(counterValue);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <Counter />
      </header>
    </div>
  );
}

export default App;
