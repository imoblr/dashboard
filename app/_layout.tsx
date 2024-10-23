import "../global.css";
import { ThemeProvider } from "@/theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Stack } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
	const [loaded, error] = useFonts({
		"RethinkSans-Regular": require("../assets/fonts/RethinkSans-Regular.ttf"),
		"RethinkSans-Medium": require("../assets/fonts/RethinkSans-Medium.ttf"),
		"RethinkSans-SemiBold": require("../assets/fonts/RethinkSans-SemiBold.ttf"),
		"RethinkSans-Bold": require("../assets/fonts/RethinkSans-Bold.ttf"),
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
			<Stack screenOptions={{ headerShown: false }} />
		</ThemeProvider>
	);
}
