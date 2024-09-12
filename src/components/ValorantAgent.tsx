import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useFetch } from "../hooks/useFetch";

type ValorantAgent = {
	uuid: string;
	displayName: string;
	displayIcon: string;
	background: string;
};

const ValorantAgent = () => {
	const { data, loading, error } = useFetch<ValorantAgent[]>("https://valorant-api.com/v1/agents");

	console.log(data);

	if (loading) {
		return (
			<div className="w-full h-full text-center flex justify-center items-center">
				<ArrowPathIcon className="w-12 h-12 animate-spin mr-2" />
				<p>Loading Agent List...</p>
			</div>
		);
	}

	if (error) {
		return <p>Failed</p>;
	}

	return (
		<div className="grid grid-cols-5 gap-6 items-center">
			{data &&
				data.map((eachAgent: ValorantAgent) => (
					<div key={eachAgent.uuid}>
						<p className="text-center text-2xl">{eachAgent.displayName}</p>
						<img className="w-32 h-32 mx-auto" src={eachAgent.displayIcon} alt={eachAgent.displayName} />
					</div>
				))}
		</div>
	);
};

export default ValorantAgent;
