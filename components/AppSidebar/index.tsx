import { Box, Center, Icon, Text } from "../ui";
import ImoblrSidebarLogo from "@/assets/logos/imoblr-sidebar-logo.svg";
import CollapseLeftIcon from "@/assets/icons/collapse-left.svg";
import CollapseRightIcon from "@/assets/icons/collapse-right.svg";

import SidebarMenu from "./SidebarMenu";
import { Pressable } from "react-native";
import { useState } from "react";
import { View } from "moti";
import { Easing } from "react-native-reanimated";

const AppSidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<View
			animate={{ width: isCollapsed ? 64 : 240 }}
			transition={{ damping: 6, mass: 0.2, stiffness: 80, type: "spring" }}
			className={"h-full overflow-visible z-50"}
		>
			<View
				animate={{ width: isCollapsed ? 60 : 240 }}
				transition={{ damping: 6, mass: 0.2, stiffness: 80, type: "spring" }}
				className={
					"h-full bg-background border-r-[1px] border-border-lighter p-2 pt-4 shadow-xs"
				}
			>
				<Pressable
					className={`transition-all ease-in-out duration-500 absolute top-8 right-[-16px] z-50 ${isCollapsed ? "rotate-180" : "rotate-0"}`}
					onPress={toggleCollapse}
				>
					<Center className="h-[32px] w-[32px] hover:bg-primary-25 bg-background rounded-full border border-border shadow-xs">
						<Icon
							as={CollapseLeftIcon}
							className="text-text-tertiary w-[18px] h-[18px]"
						/>
					</Center>
				</Pressable>
				<Box className="pl-2">
					<ImoblrSidebarLogo width={100} height={28} />
				</Box>
				<SidebarMenu />
			</View>
		</View>
	);
};

export default AppSidebar;
