import type React from "react";
import { View, type ViewStyle } from "react-native";
import { useColorScheme } from "nativewind";
import { type ColorScheme, colorSchemes } from "./colorSchemes";

export const ThemeProvider = (props: {
	colorScheme: ColorScheme;
	children: React.ReactNode;
}) => {
	const { colorScheme: lightOrDarkMode } = useColorScheme();

	const themeStyle: ViewStyle = colorSchemes[props.colorScheme].light;
	// const themeStyle: ViewStyle = themes[props.name][lightOrDarkMode || "light"];

	return <View style={[{ flex: 1 }, themeStyle]}>{props.children}</View>;
};

export default ThemeProvider;