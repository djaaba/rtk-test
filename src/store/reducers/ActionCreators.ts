import axois from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppDispatch } from "../store";
import { IUser } from "../../models";
import { userSlice } from "./UserSlice";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
// 	try {
//         dispatch(userSlice.actions.userFetching())
// 		const response = await axois
// 			.get<IUser[]>("https://jsonplaceholder.typicode.com/todos")
//         dispatch(userSlice.actions.userFetchingSuccess(response.data))

// 	} catch (e: any) {
//         dispatch(userSlice.actions.userFetchingError(e.message))

//     }
// };

export const fetchUsers = createAsyncThunk(
	"/users/fetchAll",

	async (_, thunkAPI) => {
		try {
			const response = await axois.get<IUser[]>(
				"https://jsonplaceholder.typicode.com/todos"
			);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
