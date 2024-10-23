import * as React from "react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import {
	Box,
	Center,
	Form,
	FormCheckbox,
	FormField,
	FormInput,
	HStack,
	Icon,
	LabelSpacer,
} from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { ImoblrSymbol } from "@/components/ImoblrSymbol";
import { Link } from "expo-router";
import { Image } from "react-native";
import { useColorScheme } from "nativewind";
import { AnimatePresence, View } from "moti";
import GoogleLogo from "@/assets/logos/google-logo.svg";
import AppleLogo from "@/assets/logos/apple-logo.svg";

const formSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters.",
	}),
	about: z.string().min(1, {
		message: "We need to know.",
	}),
	accountType: z.enum(["staff", "admin", "owner"]),
	framework: z.object(
		{ value: z.string(), label: z.string() },
		{
			invalid_type_error: "Please select a framework.",
		},
	),
	favoriteEmail: z.object(
		{ value: z.string(), label: z.string() },
		{
			invalid_type_error: "Please select a favorite email.",
		},
	),
	enableNotifications: z.boolean(),
	dob: z
		.string()
		.min(1, { message: "Please enter your date of birth" })
		.refine(
			(dob) => {
				const currentDate = new Date();
				const year = currentDate.getFullYear();
				const month = String(currentDate.getMonth() + 1).padStart(2, "0");
				const day = String(currentDate.getDate()).padStart(2, "0");
				const today = `${year}-${month}-${day}`;
				return new Date(today).getTime() !== new Date(dob).getTime();
			},
			{
				message: "You cannot be born today.",
			},
		),
	tos: z.boolean().refine((value) => value, {
		message: "You must accept the terms & conditions",
	}),
});

export default function Screen() {
	const { colorScheme } = useColorScheme();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			about: "",
			enableNotifications: false,
			tos: false,
		},
	});

	return (
		<AnimatePresence exitBeforeEnter>
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
				key="login-screen"
			>
				<Center className="mb-8">
					<ImoblrSymbol className="mb-4" />
					<Text className="text-3xl text-gray-900 font-medium font-heading mb-2">
						Bem-vindo de volta!
					</Text>
					<Text className="text-sm text-text-quaternary">
						Ainda não tem uma conta?{" "}
						<Link className="text-primary" href={{ pathname: "/cadastro" }}>
							Crie uma agora
						</Link>
					</Text>
				</Center>

				{/* <ThemeToggle /> */}
				<Form {...form}>
					<Box className="w-full max-w-[360px] gap-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormInput
									className="w-full"
									autoFocus
									label="Email"
									placeholder="Email"
									{...field}
								/>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormInput
									className="w-full"
									label="Senha"
									placeholder="Senha"
									secureTextEntry
									{...field}
								/>
							)}
						/>

						<FormField
							control={form.control}
							name="tos"
							render={({ field }) => (
								<FormCheckbox
									className="my-2"
									// checked={placeType.value}
									label="Continuar logado por 30 dias"
									{...field}
								/>
							)}
						/>
						<Button className="w-full" size="lg">
							<Text className="bg-brand">Acessar minha conta</Text>
						</Button>
						<LabelSpacer label="Ou entrar com" />
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
					</Box>
				</Form>
			</View>
		</AnimatePresence>
	);
}
