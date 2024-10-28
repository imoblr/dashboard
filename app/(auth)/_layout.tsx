import { Box, Center, Icon, Text } from "@/components/ui";
import { Slot } from "expo-router";
import { Image, Pressable } from "react-native";
import { useRef, useState } from "react";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
	type ICarouselInstance,
	Pagination,
} from "react-native-reanimated-carousel";
import CircleArrowRight from "../../assets/icons/circle-arrow-right.svg";
import CircleArrowLeft from "../../assets/icons/circle-arrow-left.svg";

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
	const sliderRef = useRef<ICarouselInstance>(null);
	const reanimatedProgress = useSharedValue<number>(0);
	const [slideIndex, setSlideIndex] = useState(0);

	const onPressPagination = (index: number) => {
		sliderRef.current?.scrollTo({
			/**
			 * Calculate the difference between the current index and the target index
			 * to ensure that the carousel scrolls to the nearest index
			 */
			count: index - reanimatedProgress.value,
			animated: true,
		});
	};

	const goToNextSlide = () => {
		console.log("going next");
		sliderRef.current?.next();
	};
	const goToPrevSlide = () => {
		sliderRef.current?.prev();
	};

	return (
		// <View className="flex-1 flex-row p-2 lg:p-8 xl:p-16">
		<>
			<View className="flex-1 flex-row p-2 lg:p-8 xl:p-16 bg-background">
				<Box className="native:hidden absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,var(--color-primary-300)_3px,transparent_3px),linear-gradient(to_bottom,var(--color-primary-300)_3px,transparent_3px)] bg-[size:2vh_2vh] [mask-image:radial-gradient(ellipse_12vw_4vh_at_104%_0%,#FFF_10%,transparent_800%)] opacity-80" />
				<Box className="flex flex-1 flex-row rounded-l-xxl lg:pr-8 xl:pr-16">
					<Slot />
				</Box>
				<Box className="position-relative hidden w-[480px] flex-row overflow-hidden rounded-4xl shadow-3xl lg:flex">
					<Center className="absolute top-0 left-0 z-10 w-full">
						<Pagination.Basic
							progress={reanimatedProgress}
							data={testimonials}
							dotStyle={{
								backgroundColor: "rgba(255,255,255,0.2)",
								borderRadius: 50,
							}}
							activeDotStyle={{
								backgroundColor: "rgba(255,255,255,1)",
								borderRadius: 50,
							}}
							containerStyle={{ gap: 5, marginTop: 10 }}
							onPress={onPressPagination}
						/>
					</Center>
					<Carousel
						ref={sliderRef}
						autoPlay
						autoPlayInterval={10000}
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

					<Box className="absolute bottom-0 left-0 z-10 h-[30%] w-full rounded-t-xxl bg-[rgba(127,86,217,0.5)] px-12 py-10 backdrop-blur">
						<Text className="mb-2 font-medium text-2xl text-[#FFF]">
							{testimonials[slideIndex || 0].text}
						</Text>
						<Box className="flex flex-row items-center justify-between gap-2">
							<Box>
								<Text className="text-[#FFF] text-xl">
									{testimonials[slideIndex || 0].name}
								</Text>
								<Text className="text-[#FFF] text-sm">
									{testimonials[slideIndex || 0].job}
								</Text>
							</Box>
							<Box className="flex flex-row items-center gap-2">
								<Pressable onPress={goToPrevSlide}>
									<Icon
										as={CircleArrowLeft}
										className="text-[#FFF] text-xl w-[40px] h-[40px]"
									/>
								</Pressable>
								<Pressable onPress={goToNextSlide}>
									<Icon
										as={CircleArrowRight}
										className="text-[#FFF] text-xl w-[40px] h-[40px]"
									/>
								</Pressable>
							</Box>
						</Box>
					</Box>
				</Box>
			</View>
		</>
	);
}
