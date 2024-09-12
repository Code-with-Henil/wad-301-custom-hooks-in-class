import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useFetch } from "../hooks/useFetch";

type Todo = {
	id: number;
	title: string;
};

const UserList = () => {
	const { data, loading, error } = useFetch<Todo[]>("https://jsonplaceholder.typicode.com/todos");

	if (loading) {
		return (
			<div className="w-full h-full text-center flex justify-center items-center">
				<ArrowPathIcon className="w-5 h-5 animate-spin mr-2" />
				<p>Loading Todo List...</p>
			</div>
		);
	}

	if (error) {
		return <p>Failed</p>;
	}

	return (
		<div className="w-full border-b-2">
			{data && data.map((eachTodo: Todo) => <p key={eachTodo.id}>{eachTodo.title}</p>)}
		</div>
	);
};

export default UserList;
