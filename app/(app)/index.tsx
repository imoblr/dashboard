import { Stack, Link } from "expo-router";
import { Box, Button, Text } from "@/components/ui";

export default function Home() {
	return (
		<Box className="flex-1 overflow-hidden">
			<Text>
				opkfsdfko sdogsdogdfskogsd asgoadsfgokasdfgk
				asgoadsfgokasdfgkgadsfogdfsakogs
			</Text>
			<Link href="/cadastro" asChild>
				<Button>
					<Text>Continuar como cliente</Text>
				</Button>
			</Link>
		</Box>
	);
}
