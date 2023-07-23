import { IPost } from "../../models";

export interface PostItemProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	post: IPost;
}
