import { Box } from "@/components/ui";
import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Box className="flex-1 flex-row overflow-hidden">
			<Box className="bg-brand-25 w-[80px] h-full">side</Box>
			<Box className="flex-1">
				<Stack screenOptions={{ headerShown: false }} />
			</Box>
		</Box>
	);
}
