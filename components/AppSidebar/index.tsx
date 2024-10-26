import { Box, Center, Icon, Text } from "../ui";
import ImoblrSidebarLogo from "@/assets/logos/imoblr-sidebar-logo.svg";
import CollapseLeftIcon from "@/assets/icons/collapse-left.svg";
import CollapseRightIcon from "@/assets/icons/collapse-right.svg";

import SidebarMenu from "./SidebarMenu";
import { Pressable } from "react-native";

const AppSidebar = () => {
	return (
		<Box className="w-[64px] h-full overflow-visible z-50">
			<Box className="h-full w-[240px] bg-background border-r-[1px] border-border-lighter p-2 pt-4 shadow-xs">
				<Pressable className="absolute top-8 right-[-16px] z-50">
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
			</Box>
		</Box>
	);
};

export default AppSidebar;
