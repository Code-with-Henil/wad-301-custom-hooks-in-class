import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
	const { currentTheme, changeTheme } = useTheme();

	return (
		<nav className="w-full h-20 flex justify-between items-center">
			<div className="flex justify-start items-center gap-6">
				<p className="text-2xl font-semibold">Logo</p>
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</div>
			<div className="flex justify-end items-center gap-6">
				<button className="transition-all duration-1000" onClick={changeTheme}>
					{currentTheme === "light" ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
