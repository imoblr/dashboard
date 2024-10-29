import { Stack, Link } from "expo-router";
import { Box, Center, Text } from "@/components/ui";
import ImoblrSymbolLightBackground from "@/assets/logos/imoblr-symbol-light-background.svg";
import LottieView from "lottie-react-native";

export default function OnboardingPage() {
	return (
		<Center className="flex-1 justify-start overflow-hidden">
			<Box className="w-full max-w-[1200px] flex-row gap-24">
				<Box className="max-w-[360px]">
					<Box className="w-1/2 translate-x-[-32%] translate-y-[25%] z-[-1]">
						<LottieView
							source={require("@/assets/animations/fireworks.json")}
							style={{ width: "100%", height: "100%" }}
							autoPlay
							loop={true}
						/>
					</Box>
					<ImoblrSymbolLightBackground width={60} height={60} />
					<Text className="mt-8 mb-2 text-6xl font-bold">Olá!</Text>
					<Text className="mb-4 text-3xl font-bold">
						Seja bem-vindo à Imoblr!
					</Text>
					<Text className="text-text-tertiary mb-2">
						Sua conta foi criada com sucesso e você deu o primeiro passo para
						otimizar o seu negócio!
					</Text>
					<Text className="text-text-tertiary">
						Precisamos apenas de mais algumas informações que são essenciais
						para que você tenha uma boa experiência usando nossa plataforma,
						<Text className="text-text-tertiary font-bold ml-2">
							isso vai levar menos de 2 minutos!
						</Text>
					</Text>
				</Box>
				<Box className="flex-1 py-24">
					<Box className="bg-background p-8 rounded-2xl border border-border-lightest shadow-xs">
						<Text>okdsfoksdfk</Text>
					</Box>
				</Box>
			</Box>
		</Center>
	);
}
