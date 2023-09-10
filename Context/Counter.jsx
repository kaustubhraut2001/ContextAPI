import { createContext , useState } from "react";

const CounterContext = createContext(0);

export default CounterContext;

export const CounterProvider = (props) =>{

	const [count , setCount] = useState(0);
	return (
		<CounterContext.Provider value={{count , setCount}} >
			{props.children}
		</CounterContext.Provider>
	)

}
