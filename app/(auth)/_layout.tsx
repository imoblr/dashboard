import { Box, Center, Text } from "@/components/ui";
import { Slot } from "expo-router";
import { Image } from "react-native";
import { useRef, useState } from "react";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
	type ICarouselInstance,
	Pagination,
} from "react-native-reanimated-carousel";

const testimonials = [
	{
		name: "Monica Oliveira",
		image: require("../../assets/images/testimonial-monica.jpg"),
		text: "Conseguimos colocar nossos processos repetitivos no piloto automático e economizamos muito tempo!",
		job: "CEO - PlusHaus",
	},
	{
		name: "Henrico Chagas",
		image: require("../../assets/images/testimonial-henrico.jpg"),

		text: "A Imoblr nos ajudou a otimizar nossas oportunidades de negócio e diminuiu nossos custos operacionais.",
		job: "Diretor regional - Imobitop",
	},
];
const width = 480;

export default function AuthLayout() {
	const ref = useRef<ICarouselInstance>(null);
	const reanimatedProgress = useSharedValue<number>(0);
	const [slideIndex, setSlideIndex] = useState(0);

	const onPressPagination = (index: number) => {
		ref.current?.scrollTo({
			/**
			 * Calculate the difference between the current index and the target index
			 * to ensure that the carousel scrolls to the nearest index
			 */
			count: index - reanimatedProgress.value,
			animated: true,
		});
	};

	return (
		// <View className="flex-1 flex-row p-2 lg:p-8 xl:p-16">
		<>
			<View className="flex-1 flex-row p-2 lg:p-8 xl:p-16">
				<Box className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,var(--color-background-darker)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-background-darker)_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
				<Box className="flex flex-1 flex-row rounded-l-xxl lg:pr-8 xl:pr-16">
					<Slot />
				</Box>
				<Box className="position-relative hidden w-[480px] flex-row overflow-hidden rounded-xxl shadow-3xl lg:flex">
					<Center className="absolute top-0 left-0 z-10 w-full">
						<Pagination.Basic
							progress={reanimatedProgress}
							data={testimonials}
							dotStyle={{
								backgroundColor: "rgba(0,0,0,0.2)",
								borderRadius: 50,
							}}
							containerStyle={{ gap: 5, marginTop: 10 }}
							onPress={onPressPagination}
						/>
					</Center>
					<Carousel
						ref={ref}
						width={width}
						// @ts-ignore
						height="100%"
						data={testimonials}
						onProgressChange={reanimatedProgress}
						onScrollEnd={setSlideIndex}
						renderItem={({ index }) => (
							<Center className="h-full w-[480px] overflow-hidden bg-background-a3">
								<Image
									source={testimonials[index].image}
									style={{ height: "100%", minWidth: width }}
								/>
							</Center>
						)}
					/>
					<Box className="absolute bottom-0 left-0 z-10 h-[30%] w-full rounded-t-xxl bg-background-darkest-a3 px-12 py-10 backdrop-blur">
						<Text className="mb-2 font-medium text-2xl text-[#FFF]">
							{testimonials[slideIndex || 0].text}
						</Text>
						<Text className="text-[#FFF] text-xl">
							{testimonials[slideIndex || 0].name}
						</Text>
						<Text className="text-[#FFF] text-sm">
							{testimonials[slideIndex || 0].job}
						</Text>
					</Box>
				</Box>
			</View>
		</>
	);
}
