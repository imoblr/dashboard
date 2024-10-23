import * as React from "react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import LottieView from "lottie-react-native";
import {
	Box,
	Center,
	Form,
	FormField,
	FormInput,
	HStack,
	Icon,
	LabelSpacer,
} from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Link } from "expo-router";
import { Image, Platform } from "react-native";
import { useColorScheme } from "nativewind";
import { AnimatePresence, View } from "moti";
import { ImoblrSymbol } from "@/components";
import GoogleLogo from "@/assets/logos/google-logo.svg";
import AppleLogo from "@/assets/logos/apple-logo.svg";

const formSchema = z.object({
	email: z.string().email({
		message: "O endereço de email precisa ser válido.",
	}),
	password: z.string().min(8, {
		message: "Sua senha precisa ter no mínimo 8 caracteres.",
	}),
});

type FormWithInputs = z.infer<typeof formSchema>;
type FieldName = keyof FormWithInputs;

const signUpSteps = [
	{
		fields: ["email"],
	},
	{
		fields: ["password"],
	},
];

export default function Screen() {
	const animationRef = React.useRef<LottieView>(null);
	const { colorScheme } = useColorScheme();
	const [signUpStep, setSignUpStep] = React.useState(1);
	const form = useForm<FormWithInputs>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	React.useEffect(() => {
		if (signUpStep === 3) {
			setTimeout(() => {
				animationRef.current?.play();
				setTimeout(() => {
					animationRef.current?.pause();
				}, 2000);
			}, 750);
		}
	}, [signUpStep]);

	const continueToPassword = async () => {
		const fields = signUpSteps[0].fields;
		const output = await form.trigger(fields as FieldName[], {
			shouldFocus: true,
		});

		if (!output) return;

		setSignUpStep(2);
	};

	function onSubmit(values: FormWithInputs) {
		console.log("onSubmit", values);
		setSignUpStep(3);
	}

	return (
		<Center className="h-full w-full p-6">
			<AnimatePresence exitBeforeEnter>
				{signUpStep === 1 && (
					<View
						from={{
							opacity: 0,
							scale: 0.9,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						exit={{
							opacity: 0,
							scale: 0.9,
						}}
						exitTransition={{
							type: "timing",
							duration: 300,
						}}
						className="flex h-full w-full items-center justify-center"
						key="sign-up-step-1"
					>
						<Center className="mb-8">
							<ImoblrSymbol className="mb-4" size="sm" />
							<Text className="text-3xl  text-gray-900 font-heading mb-2">
								Crie sua conta
							</Text>
							<Text className="text-text-tertiary">
								Já tem uma conta?{" "}
								<Link
									className="text-primary font-base"
									href={{ pathname: "/entrar" }}
								>
									Fazer login
								</Link>
							</Text>
						</Center>

						<Form {...form}>
							<View className="w-full max-w-[360px] gap-4">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormInput
											className="w-full"
											autoFocus={Platform.OS === "web"}
											label="Email"
											placeholder="Email"
											onKeyPress={(e) => {
												if (e.nativeEvent.key === "Enter") {
													continueToPassword();
												}
											}}
											{...field}
										/>
									)}
								/>
								<Button
									className="w-full"
									size="lg"
									onPress={continueToPassword}
								>
									<Text className="bg-brand">Continuar com email</Text>
								</Button>
								<LabelSpacer label="Ou cadastre-se com" />
								<HStack className="w-full">
									<Button variant="outline" className="flex-1">
										<Icon as={GoogleLogo} />
										<Text className="ml-4">Google</Text>
									</Button>
									<Button variant="outline" className="flex-1">
										<Icon
											as={AppleLogo}
											className="text-[#000] w-[22px] h-[22px]"
										/>

										<Text className="ml-4">Apple</Text>
									</Button>
								</HStack>
								<Text className="px-8 text-center text-sm text-text-quaternary">
									Ao se cadastrar você concorda com os nossos &nbsp;
									<Link
										className="text-primary"
										href={{ pathname: "/termos-de-uso" }}
									>
										Termos de Uso
									</Link>
									.
								</Text>
							</View>
						</Form>
					</View>
				)}
				{signUpStep === 2 && (
					<View
						from={{
							opacity: 0,
							scale: 0.9,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						exit={{
							opacity: 0,
							scale: 0.9,
						}}
						exitTransition={{
							type: "timing",
							duration: 300,
						}}
						className="flex h-full w-full items-center justify-center"
						key="sign-up-step-2"
					>
						<Center className="mb-8">
							<Text className="text-3xl font-heading">Defina sua senha</Text>
							<Text className="text-sm text-text-quaternary">
								Defina uma senha segura para sua conta.
							</Text>
						</Center>

						<Form {...form}>
							<View className="w-full max-w-[360px] gap-4">
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormInput
											className="w-full"
											autoFocus
											label="Escolha uma senha"
											placeholder="Escolha uma senha"
											{...field}
											onKeyPress={(e) => {
												if (e.nativeEvent.key === "Enter") {
													form.handleSubmit(onSubmit)();
												}
											}}
										/>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormInput
											className="w-full"
											label="Repita sua senha"
											placeholder="Repita sua senha"
											onKeyPress={(e) => {
												if (e.nativeEvent.key === "Enter") {
													form.handleSubmit(onSubmit)();
												}
											}}
											{...field}
										/>
									)}
								/>
								<Button
									className="w-full"
									size="lg"
									onPress={form.handleSubmit(onSubmit)}
								>
									<Text className="bg-brand">Criar minha conta</Text>
								</Button>
							</View>
						</Form>
					</View>
				)}
				{signUpStep === 3 && (
					<View
						from={{
							opacity: 0,
							scale: 0.9,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						exit={{
							opacity: 0,
							scale: 0.9,
						}}
						exitTransition={{
							type: "timing",
							duration: 300,
						}}
						className="flex flex-1 h-full w-full items-center justify-center"
						key="sign-up-step-3"
					>
						<Center className="h-full w-full max-w-[360px]">
							<View className="mb-2 w-[60vw] h-[60vw] md:w-[25vh] md:h-[25vh]">
								<LottieView
									source={require("@/assets/animations/success-animation.json")}
									style={{ width: "100%", height: "100%" }}
									ref={animationRef}
									autoPlay={false}
									loop={false}
								/>
							</View>

							<Text className="text-3xl font-heading mb-2">
								Sua conta foi criada!
							</Text>
							<Text className="text-center text-sm text-text-quaternary">
								Criamos sua conta e agora você pode visualizar seu painel.
								Clique no botão abaixo para continuar.
							</Text>
							<Link href="/" asChild>
								<Button className="mt-8 w-full" size="lg">
									<Text className="bg-brand">Visualizar meu painel</Text>
								</Button>
							</Link>
						</Center>
					</View>
				)}
			</AnimatePresence>
		</Center>
	);
}
