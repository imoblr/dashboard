import "../global.css";
import { ThemeProvider } from "@/theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Stack } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
	const [loaded, error] = useFonts({
		"Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
		Inter: require("../assets/fonts/Inter-Regular.ttf"),
		CalSans: require("../assets/fonts/CalSans.ttf"),
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
