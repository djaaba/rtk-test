import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../models";

interface IUserState {
	users: IUser[];
	isLoading: boolean;
	error: string;
}

const initialState: IUserState = {
	users: [],
	isLoading: false,
	error: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userFetching(state) {
			state.isLoading = true;
		},
		userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
			state.isLoading = false;
			state.error = "";
			state.users = action.payload;
		},
		userFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default userSlice.reducer;
