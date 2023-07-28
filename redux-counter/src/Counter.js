import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Increment, Decrement } from './Redux/CounterAction';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className='container'>
    <div className='border'>
      <h1>Number counter</h1>
      <div className="counter">
        <button className='increment' onClick={() => dispatch(Increment())}>Increment</button>
        <span>{counter}</span>
        <button className='decrement' onClick={() => dispatch(Decrement())}>Decrement</button>
      </div>
      </div>
    </div>
  );
}

export default Counter;
