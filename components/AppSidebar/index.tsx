import { Box, Center, Icon, Text } from "../ui";
import ImoblrSidebarLogo from "@/assets/logos/imoblr-sidebar-logo.svg";
import UnpinIcon from "@/assets/icons/unpin.svg";
import PinIcon from "@/assets/icons/pin.svg";

import SidebarMenu from "./SidebarMenu";
import { Pressable } from "react-native";
import { useState } from "react";
import { View } from "moti";

const AppSidebar = () => {
	const [isPinned, setIsPinned] = useState(true);
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
				className={
					"h-full bg-background border-r-[1px] border-border-lighter p-2 pt-4 shadow-xs"
				}
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
								style={{ width: 32, height: 64 }}
								transition={{
									damping: 5,
									mass: 0.2,
									stiffness: 60,
									type: "spring",
								}}
								className="absolute h-[32px] w-[64px] justify-center items-center bg-gray-950 rounded-full"
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
				<Box className="pl-2">
					<ImoblrSidebarLogo width={100} height={28} />
				</Box>
				<SidebarMenu isCollapsed={!isPinned && !isHovered} />
			</View>
		</View>
	);
};

export default AppSidebar;
