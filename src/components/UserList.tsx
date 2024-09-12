import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useFetch } from "../hooks/useFetch";

type User = {
	id: number;
	name: string;
};

const UserList = () => {
	const { data, loading, error } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

	if (loading) {
		return (
			<div className="w-full h-full text-center flex justify-center items-center">
				<ArrowPathIcon className="w-5 h-5 animate-spin mr-2" />
				<p>Loading User List...</p>
			</div>
		);
	}

	if (error) {
		return <p>Failed</p>;
	}

	return (
		<div className="w-full border-b-2">
			{data && data.map((eachUser: User) => <p key={eachUser.id}>{eachUser.name}</p>)}
		</div>
	);
};

export default UserList;
