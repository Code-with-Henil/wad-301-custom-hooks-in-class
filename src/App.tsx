import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import PostList from "./components/PostList";
import ValorantAgent from "./components/ValorantAgent";

const App = () => {
	return (
		<div className="w-full h-full bg-background text-foreground transition-colors duration-500 px-6">
			<Navbar />

			{/* Go to JSON Placeholder */}

			{/* 1. Render User Info */}
			{/* <UserList /> */}

			{/* 2. Render Todo Info */}
			{/* <TodoList /> */}

			{/* 3. Render Post Info */}
			{/* <PostList /> */}

			<ValorantAgent />
		</div>
	);
};

export default App;
