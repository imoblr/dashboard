import { Stack, Link } from "expo-router";
import {
	Box,
	Button,
	Center,
	Form,
	FormField,
	Icon,
	Text,
	ToggleGroup,
	ToggleGroupItem,
} from "@/components/ui";
import ImoblrSymbolLightBackground from "@/assets/logos/imoblr-symbol-light-background.svg";
import LottieView from "lottie-react-native";
import { useState } from "react";
import RadioButton from "@/assets/icons/duotone/radio-button.svg";
import Circle from "@/assets/icons/circle.svg";
import BuildingAlt from "@/assets/icons/duotone/buildings-alt.svg";
import Briefcase from "@/assets/icons/duotone/briefcase.svg";
import User from "@/assets/icons/duotone/user.svg";
import { cn } from "@/utils";

const businessTypes = [
	{
		name: "Corretor",
		description:
			"Você é um profissional de imóveis que vende ou aluga de forma individual imóveis diretamente para seus clientes.",
		value: "agent",
		icon: Briefcase,
	},
	{
		name: "Imobiliária",
		value: "agency",
		description:
			"Você é dono ou faz parte de uma imobiliária onde 2 ou mais pessoas vendem ou alugam imóveis.",
		icon: BuildingAlt,
	},
	{
		name: "Proprietário",
		value: "owner",
		description:
			"Você é proprietário de imóveis, que aluga ou vende seus próprios imóveis diretamente para seus clientes.",
		icon: User,
	},
];

const getBusinessTypeByValue = (value: string) => {
	return businessTypes.find((type) => type.value === value);
};

export default function OnboardingPage() {
	const [value, setValue] = useState<string | undefined>(undefined);
	const businessTypeObject = getBusinessTypeByValue(value);

	return (
		<Center className="w-full h-full max-w-[100%]">
			<Center className="w-full max-w-[1100px] flex-row">
				<Box className="max-w-[320px] mr-32 mt-[-20%]">
					<Box className="w-[160px] h-[100px] translate-x-[-30%] translate-y-[-25%] z-[-1]">
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
					<Text className="text-text-tertiary mb-2">
						Você deu o primeiro passo para transformar o seu negócio!
					</Text>
					<Text className="text-text-tertiary">
						Precisamos apenas de mais algumas informações otimizar sua
						experiência em nossa plataforma,
						<Text className="text-text-tertiary font-bold ml-2">
							leva menos de 2 minutos!
						</Text>
					</Text>
				</Box>
				<Box className="flex-1 flex-column">
					<Text className="text-lg font-medium">
						Selecione a opção que melhor descreve o seu negócio:
					</Text>
					<Text className="text-text-quaternary mb-8">
						Essa informação é importante para exibirmos as informações mais
						relevantes para cada perfil de usuário.
					</Text>

					<ToggleGroup
						value={value}
						onValueChange={setValue}
						type="single"
						className="w-full gap-4 flex-column"
					>
						{businessTypes.map((type) => (
							<ToggleGroupItem
								className={cn(
									"transition-all duration-300 ease-in-out bg-background border-[1px] border-border w-full shadow-xs py-4 px-6 h-[auto] rounded-2xl",
									{
										"border-primary-700 ring-1 ring-primary-700 pointer-events-none":
											type.value === value,
										"hover:scale-[102%]": type.value !== value,
									},
								)}
								value={type.value}
								aria-label="Toggle bold"
								key={type.value}
							>
								<Box className="flex flex-row items-center gap-2 w-full">
									<Icon
										as={type.value === "bold" ? RadioButton : Circle}
										className={`text-${type.value === value ? "primary-800" : "text-tertiary"}`}
									/>
									<Center className="flex-1 ml-4 flex-row">
										<Center
											className={cn(
												"w-[60px] h-[60px] rounded-xl bg-background-darkest",
												{
													"bg-primary-50": type.value === value,
												},
											)}
										>
											<Icon
												as={type.icon}
												className={`text-${type.value === value ? "primary-800" : "text-tertiary"} w-[32px] h-[32px]`}
											/>
										</Center>
										<Box className="flex-column flex-1 ml-4">
											<Text
												className={cn("font-bold text-text-tertiary", {
													"text-primary-800": type.value === value,
												})}
											>
												{type.name}
											</Text>
											<Text className="text-text-quaternary font-base text-sm">
												{type.description}
											</Text>
										</Box>
									</Center>
								</Box>
							</ToggleGroupItem>
						))}
					</ToggleGroup>
					<Box className="flex flex-row justify-end mt-4">
						<Button
							className="w-[50%] mt-8"
							size="lg"
							disabled={!businessTypeObject}
						>
							<Text>
								{businessTypeObject
									? `Continuar como ${businessTypeObject.name}`
									: "Selecione um tipo de negócio"}
							</Text>
						</Button>
					</Box>
				</Box>
			</Center>
		</Center>
	);
}
