import { Box } from "../ui";
import { PropertiesIcon } from "./icons/PropertiesIcon";
import MenuSection, { type MenuSectionProps } from "./MenuSection";

const SidebarMenu = () => {
	const menuItems = [
		{
			title: undefined,
			items: [
				{
					title: "Dashboard",
					href: {
						pathname: "/",
					},
					icon: <PropertiesIcon width={24} height={24} />,
				},
			],
		},
	];

	return (
		<Box>
			{menuItems.map((section) => (
				<MenuSection key={section.title} {...(section as MenuSectionProps)} />
			))}
		</Box>
	);
};

export default SidebarMenu;
