import AppSidebar from "@/components/AppSidebar";
import { Box, Icon } from "@/components/ui";
import { Slot, Stack } from "expo-router";

export default function Layout() {
	return (
		<Box className="w-full h-full flex-row overflow-auto bg-background-darker">
			<AppSidebar />
			<Box className="flex-1 max-w-[100%]">
				<Slot />
			</Box>
		</Box>
	);
}
