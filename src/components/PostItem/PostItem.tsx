import React from "react";

import { PostItemProps } from "./PostItem.props";
import styles from "./PostItem.module.css";

export const PostItem = ({ post, ...props }: PostItemProps): JSX.Element => {
	const { id, title, body } = post;

	return (
		<>
			<div>
				{id}.{title}
				<button>Delete</button>
			</div>
		</>
	);
};
