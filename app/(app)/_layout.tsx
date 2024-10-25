import AppSidebar from "@/components/AppSidebar";
import { Box, Icon } from "@/components/ui";
import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Box className="flex-1 flex-row overflow-hidden bg-background">
			<AppSidebar />
			<Box className="flex-1">
				<Stack screenOptions={{ headerShown: false }} />
			</Box>
		</Box>
	);
}
