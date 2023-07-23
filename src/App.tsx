import React from "react";

import "./App.css";

import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { PostContainer } from "./components";

function App() {
	const { error, isLoading, users } = useAppSelector(
		(store) => store.userReducer
	);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<>
			{isLoading && <h1>Загрузка</h1>}
			{error && <h1>{error}</h1>}
			{/* {JSON.stringify(users, null, 2)} */}
			<PostContainer />
		</>
	);
}

export default App;
