import { Stack, Link } from "expo-router";
import {
	Box,
	Center,
	Form,
	FormField,
	RadioGroupItem,
	Text,
	ToggleGroup,
	ToggleGroupItem,
} from "@/components/ui";
import ImoblrSymbolLightBackground from "@/assets/logos/imoblr-symbol-light-background.svg";
import LottieView from "lottie-react-native";
import { useState } from "react";

export default function OnboardingPage() {
	const [value, setValue] = useState<string | undefined>(undefined);

	console.log(value);

	return (
		<Center className="flex-1 justify-start overflow-hidden">
			<Center className="w-full max-w-[640px]">
				<Center className="max-w-[480px]">
					<Box className="w-[160px] h-[100px] translate-y-[-25%] z-[-1]">
						<LottieView
							source={require("@/assets/animations/fireworks.json")}
							style={{ width: "100%", height: "100%" }}
							autoPlay
							loop={true}
						/>
					</Box>
					<ImoblrSymbolLightBackground width={60} height={60} />

					<Text className="mt-8 text-primary mr-1 text-4xl font-bold">
						Olá!
					</Text>
					<Text className="mb-4 text-2xl">Seja bem-vindo à Imoblr!</Text>
					<Text className="text-text-tertiary mb-2 text-center">
						Você deu o primeiro passo para transformar o seu negócio!
					</Text>
					<Text className="text-text-tertiary text-center">
						Precisamos apenas de mais algumas informações otimizar sua
						experiência em nossa plataforma,
						<Text className="text-text-tertiary font-bold ml-2">
							leva menos de 2 minutos!
						</Text>
					</Text>
				</Center>
				<Box className="w-full py-12">
					<Box className="bg-background rounded-2xl border border-border-lightest shadow-xs">
						<Box className="flex flex-row items-center justify-between py-6 px-8 border-b-[1px] border-border-lightest">
							<Text className="text-lg">Sobre o seu negócio</Text>
						</Box>
						<Text>Tipo de imóvel</Text>
						<Box className="flex flex-row items-center justify-between gap-2 bg-background py-6 px-8 rounded-b-2xl">
							<ToggleGroup
								value={value}
								onValueChange={setValue}
								type="single"
								className="w-full gap-4 flex-column"
							>
								<ToggleGroupItem
									className="bg-background border-[1px] border-border-lighter w-full shadow-xs py-8"
									value="bold"
									aria-label="Toggle bold"
								>
									<RadioGroupItem value="bold" className="font-bold" />
									<Text className="font-bold">Corretor individual</Text>
								</ToggleGroupItem>
								<ToggleGroupItem
									className="bg-background border-[1px] border-border-lighter w-full shadow-xs py-8"
									value="italic"
									aria-label="Toggle italic"
								>
									<Text className="font-bold">Proprietário de imóveis</Text>
								</ToggleGroupItem>
								<ToggleGroupItem
									className="bg-background border-[1px] border-border-lighter w-full shadow-xs py-8"
									value="underline"
									aria-label="Toggle underline"
								>
									<Text className="font-bold">Imobiliária</Text>
								</ToggleGroupItem>
							</ToggleGroup>
						</Box>
					</Box>
				</Box>
			</Center>
		</Center>
	);
}
