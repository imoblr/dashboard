import { Stack, Link } from "expo-router";
import { Box, Center, Text } from "@/components/ui";

export default function OnboardingPage() {
	return (
		<Center className="flex-1 justify-start overflow-hidden">
			<Box className="w-full max-w-[1200px] flex-row py-36 gap-12">
				<Box className="max-w-[360px]">
					<Text className="text-2xl font-bold">Seja bem-vindo(a)!</Text>
					<Text className="text-text-tertiary">
						Sua conta foi criada com sucesso e você deu o seu primeiro passo
						para otimizar o seu negócio imobiliário!
					</Text>
				</Box>
				<Box className="flex-1">
					<Box className="bg-background">
						<Text>okdsfoksdfk</Text>
					</Box>
				</Box>
			</Box>
		</Center>
	);
}
