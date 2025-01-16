import React from "react";
import CommentList from "./CommentList";

const CommentContainer = () => {

	const commentLists = [
		{
			name: "Yogesh",
			comment: "This video is just awesome!",
			replies: [
				{
					name: "Yogesh",
					comment: "This video is just awesome!",
					replies: [
						{
							name: "Yogesh",
							comment: "This video is just awesome!",
							replies: [
								{
									name: "Yogesh",
									comment: "This video is just awesome!",
									replies: [
										{
											name: "Yogesh",
											comment: "This video is just awesome!",
											replies: [],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			name: "Yogesh",
			comment: "This video is just awesome!",
			replies: [
				{
					name: "Yogesh",
					comment: "This video is just awesome!",
					replies: [],
				},
				{
					name: "Yogesh",
					comment: "This video is just awesome!",
					replies: [],
				},
			],
		},
		{
			name: "Yogesh",
			comment: "This video is just awesome!",
		},
	];

	return (
		<div className="m-3 p-2 w-[60%]">
			<h1 className="text-2xl font-bold">Comments</h1>
			<CommentList comments={commentLists} />
		</div>
	);
};

export default CommentContainer;
