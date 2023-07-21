import React from "react";

import "./App.css";

import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";

function App() {
	const { count } = useAppSelector((store) => store.userReducer);
	const { increment } = userSlice.actions;
	const dispatch = useAppDispatch();

	return (
		<>
			<button onClick={() => dispatch(increment(10))}>+</button>
			<div>{count}</div>
		</>
	);
}

export default App;
