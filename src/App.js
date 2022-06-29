import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice';

function App() {
  const [ incrementAmount, setIncrementAmount ] = useState(2);

  //useSelector...状態にアクセスするhooks
  const count = useSelector((state) => state.counter.value)
  
  //useDispach...storeにアクションを通知するhooks
  const dispatch = useDispatch();

  console.log(count);

  return (
    <div className="App">
    <h1>count: {count}</h1>
    <div className='buttonContainer'>
      <input type="text" onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount}/>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Add</button>
    </div>
    </div>
  );
}

export default App;
