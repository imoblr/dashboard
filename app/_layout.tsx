import "../global.css";
import { ThemeProvider } from "@/theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Slot } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
	const [loaded, error] = useFonts({
		"Inter-Regular": require("../assets/fonts/inter/Inter-Regular.ttf"),
		"Inter-Medium": require("../assets/fonts/inter/Inter-Medium.ttf"),
		"Inter-Bold": require("../assets/fonts/inter/Inter-Bold.ttf"),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<ThemeProvider colorScheme="brand">
			<Slot />
		</ThemeProvider>
	);
}
