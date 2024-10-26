import AppSidebar from "@/components/AppSidebar";
import { Box, Icon } from "@/components/ui";
import { Slot, Stack } from "expo-router";

export default function Layout() {
	return (
		<Box className="flex-1 flex-row overflow-hidden bg-background-darker">
			<AppSidebar />
			<Box className="flex-1">
				<Slot />
			</Box>
		</Box>
	);
}
