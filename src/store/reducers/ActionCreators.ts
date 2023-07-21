import axois from "axios";

import { AppDispatch } from "../store";
import { IUser } from "../../models";
import { userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
        dispatch(userSlice.actions.userFetching())
		const response = await axois
			.get<IUser[]>("https://jsonplaceholder.typicode.com/todos")
			.then();
        dispatch(userSlice.actions.userFetchingSuccess(response.data))

	} catch (e: any) {
        dispatch(userSlice.actions.userFetchingError(e.message))

    }
};
