import React , {useContext} from 'react'
import CounterContext from '../../Context/Counter';
const Conter = () => {


	const count = useContext(CounterContext);
	const increment = () => {
		count.setCount(count.count + 1)
	}
	const decrement = () => {
		count.setCount(count.count - 1)
	}
  return (
	<div>
		<button onClick={increment}>Increase</button>
		<button onClick={decrement}>Decrease</button>

	</div>
  )
}

export default Conter