
import './App.css'
import Conter from './Component/Conter'

import {useContext} from  'react';
import CounterContext from '../Context/Counter';
function App() {

  const count = useContext(CounterContext);
  console.log(count);

  return (
    <>
    <h4>Context API</h4>
    <h5>Count is {count.count}</h5>
    <Conter count/>
    </>
  )
}

export default App
