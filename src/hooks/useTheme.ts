import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
	const [currentTheme, setCurrentTheme] = useState<Theme>("dark");

	useEffect(() => {
		console.log(currentTheme);

		if (currentTheme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [currentTheme]);

	const changeTheme = () => {
		setCurrentTheme(currentTheme === "light" ? "dark" : "light");
	};

	return { currentTheme, changeTheme };
};
