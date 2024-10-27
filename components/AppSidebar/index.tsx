import { Box, Center, Icon, Text } from "../ui";
import ImoblrSidebarLogo from "@/assets/logos/imoblr-sidebar-logo.svg";
import CollapseLeftIcon from "@/assets/icons/unpin.svg";
import CollapseRightIcon from "@/assets/icons/pin.svg";

import SidebarMenu from "./SidebarMenu";
import { Pressable } from "react-native";
import { useState } from "react";
import { View } from "moti";
import { Easing } from "react-native-reanimated";

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
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				animate={{ width: isPinned ? 64 : 240 }}
				transition={{ damping: 5, mass: 0.2, stiffness: 60, type: "spring" }}
				className={
					"h-full bg-background border-r-[1px] border-border-lighter p-2 pt-4 shadow-xs"
				}
			>
				<Pressable
					className={`transition-all ease-in-out duration-500 absolute top-8 right-[-16px] z-50 ${isPinned ? "rotate-180" : "rotate-0"}`}
					onPress={toggleIsPinned}
				>
					<Center className="h-[32px] w-[32px] hover:bg-primary-25 bg-background rounded-full border border-border shadow-xs">
						<Icon
							as={CollapseLeftIcon}
							className="text-text-tertiary w-[18px] h-[18px]"
						/>
					</Center>
				</Pressable>
				<Box className="pl-2">
					{isHovered && <ImoblrSidebarLogo width={100} height={28} />}
					<ImoblrSidebarLogo width={100} height={28} />
				</Box>
				<SidebarMenu />
			</View>
		</View>
	);
};

export default AppSidebar;
