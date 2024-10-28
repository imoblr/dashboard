import { Box, Center, Icon, Text } from "../ui";
import ImoblrSidebarLogo from "@/assets/logos/imoblr-sidebar-logo.svg";
import ImoblrSymbolDarkBackground from "@/assets/logos/imoblr-symbol-dark-background.svg";
import ImoblrWordingDarkBackground from "@/assets/logos/imoblr-wording-dark-background.svg";
import ImoblrSymbolLightBackground from "@/assets/logos/imoblr-symbol-light-background.svg";
import ImoblrWordingLightBackground from "@/assets/logos/imoblr-wording-light-background.svg";
import UnpinIcon from "@/assets/icons/unpin.svg";
import PinIcon from "@/assets/icons/pin.svg";

import SidebarMenu from "./SidebarMenu";
import { Easing, Pressable } from "react-native";
import { useState } from "react";
import { AnimatePresence, View } from "moti";

export const CollapsedSidebarWidth = 64;
export const ExpandedSidebarWidth = 240;
export const SidebarPadding = 8;

const AppSidebar = () => {
	const [isPinned, setIsPinned] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const toggleIsPinned = () => {
		setIsPinned(!isPinned);
	};

	return (
		<View
			animate={{ width: isPinned ? 240 : 64 }}
			transition={{ damping: 5, mass: 0.2, stiffness: 60, type: "spring" }}
			className={"h-full overflow-visible z-50"}
		>
			<View
				// @ts-ignore
				onMouseEnter={() => {
					setIsHovered(true);
				}}
				onMouseLeave={() => {
					setIsHovered(false);
				}}
				animate={{ width: isPinned || isHovered ? 240 : 64 }}
				transition={{ damping: 5, mass: 0.2, stiffness: 60, type: "spring" }}
				className={"h-full bg-background p-[8px] pt-4 shadow-xs"}
			>
				<View
					animate={{
						opacity: isPinned || isHovered ? 1 : 0,
						scale: isPinned || isHovered ? 1 : 0.2,
					}}
					className="absolute top-8 right-[-16px] z-50"
				>
					<Pressable
						className={"transition-all ease-in-out duration-500"}
						onPress={toggleIsPinned}
					>
						<Center className="h-[32px] w-[32px] hover:bg-primary-25 bg-background rounded-full border border-border shadow-xs overflow-hidden">
							<View
								animate={{ scale: isPinned ? 1 : 0 }}
								style={{ width: 32, height: 32 }}
								transition={{
									damping: 5,
									mass: 0.2,
									stiffness: 60,
									type: "spring",
								}}
								className="absolute h-[32px] w-[32px] justify-center items-center bg-gray-950 rounded-full"
							>
								<Icon
									as={UnpinIcon}
									className="text-text-inverse w-[18px] h-[18px]"
								/>
							</View>
							<Icon
								as={PinIcon}
								className="text-text-tertiary w-[18px] h-[18px]"
							/>
						</Center>
					</Pressable>
				</View>
				<Box className="flex flex-row items-center gap-3 px-3 py-2 text-text-secondary">
					<Center className="w-[24px] h-[24px]">
						<Icon
							as={ImoblrSymbolLightBackground}
							size="xl"
							className="transition-all ease-in-out duration-300 select-none"
						/>
					</Center>
					<AnimatePresence exitBeforeEnter>
						{(isPinned || isHovered) && (
							<View
								from={{
									opacity: 0,
									width: 0,
								}}
								animate={{
									opacity: 1,
									width: 160,
								}}
								exit={{
									opacity: 0,
									width: 0,
								}}
								transition={{
									type: "timing",
									easing: Easing.elastic(1),
									duration: 400,
								}}
								exitTransition={{
									type: "timing",
									easing: Easing.linear,
									duration: 50,
								}}
								className="overflow-hidden translate-y-[-2px]"
							>
								<ImoblrWordingLightBackground width={60} height={24} />
							</View>
						)}
					</AnimatePresence>
				</Box>
				<SidebarMenu isCollapsed={!isPinned && !isHovered} />
			</View>
		</View>
	);
};

export default AppSidebar;
