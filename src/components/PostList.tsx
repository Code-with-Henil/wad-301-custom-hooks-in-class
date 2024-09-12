import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useFetch } from "../hooks/useFetch";

type Post = {
	id: number;
	title: string;
};

const PostList = () => {
	const { data, loading, error } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

	if (loading) {
		return (
			<div className="w-full h-full text-center flex justify-center items-center">
				<ArrowPathIcon className="w-5 h-5 animate-spin mr-2" />
				<p>Loading Post List...</p>
			</div>
		);
	}

	if (error) {
		return <p>Failed</p>;
	}

	return (
		<div className="w-full border-b-2">
			{data && data.map((eachPost: Post) => <p key={eachPost.id}>{eachPost.title}</p>)}
		</div>
	);
};

export default PostList;
