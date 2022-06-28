import { useSelector } from 'react-redux';
import './App.css';

function App() {
  //状態にアクセスするhooks
  const count = useSelector((state) => state.counter.value)
  console.log(count);

  return (
    <div className="App">
    <h1>count: {count}</h1>
    </div>
  );
}

export default App;
