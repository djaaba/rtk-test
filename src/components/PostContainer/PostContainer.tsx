import React from "react";

import { PostContainerProps } from "./PostContainer.props";
import styles from "./PostContainer.module.css";

import { postAPI } from "../../services/PostService";
import { PostItem } from "../";

export const PostContainer = ({
	...props
}: PostContainerProps): JSX.Element => {
	const [limit, setLimit] = React.useState<number>(5);
	const { data: posts } = postAPI.useFetchAllPostsQuery(limit);
    // pollingInterval: 1000 

	return (
		<>
			<div>
				{posts &&
					posts.map((post) => <PostItem key={post.id} post={post} />)}
			</div>
		</>
	);
};
