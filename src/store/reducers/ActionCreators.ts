import axois from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppDispatch } from "../store";
import { IUser } from "../../models";
import { userSlice } from "./UserSlice";

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
