import { Box, Text } from "../ui";
import ImoblrSidebarLogo from "@/assets/logos/imoblr-sidebar-logo.svg";

import SidebarMenu from "./SidebarMenu";

const AppSidebar = () => {
	return (
		<Box className="w-[64px] h-full overflow-visible z-50">
			<Box className="h-full w-[240px] bg-background-darker border-r-[1px] border-border p-2 pt-4">
				<Box className="pl-2">
					<ImoblrSidebarLogo width={110} height={32} />
				</Box>
				<SidebarMenu />
			</Box>
		</Box>
	);
};

export default AppSidebar;
