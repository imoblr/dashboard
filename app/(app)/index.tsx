import { Stack, Link } from "expo-router";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ScreenContent } from "@/components/ScreenContent";
import { Box } from "@/components/ui";

export default function Home() {
	return (
		<Box className="flex-1 overflow-hidden bg-background">
			<Stack.Screen options={{ title: "Home" }} />
			<Box>sdgoksdgoksd</Box>
		</Box>
	);
}
