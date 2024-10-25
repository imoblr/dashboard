import { Box } from "../ui";
import { PropertiesIcon } from "./icons/PropertiesIcon";
import MenuSection, { type MenuSectionProps } from "./MenuSection";

const menuIconSize = 20;

const getIconProps = (isActive: boolean) => {
	return {
		width: menuIconSize,
		height: menuIconSize,
		primaryGradientStart: isActive ? "primary-600" : "primary-500",
		primaryGradientEnd: isActive ? "primary-700" : "primary-600",
		secondaryGradientStart: isActive ? "primary-600" : "primary-500",
		secondaryGradientEnd: isActive ? "primary-700" : "primary-600",
	};
};

const SidebarMenu = () => {
	const menuSections = [
		{
			id: "dashboard",
			title: undefined,
			items: [
				{
					title: "Visão geral",
					href: {
						pathname: "/",
					},
					icon: <PropertiesIcon {...getIconProps(true)} />,
				},
			],
		},
		{
			id: "main",
			title: "Menu principal",
			items: [
				{
					title: "Imóveis",
					href: {
						pathname: "/",
					},
					icon: <PropertiesIcon {...getIconProps(true)} />,
				},
				{
					title: "Clientes e leads",
					href: {
						pathname: "/",
					},
					icon: <PropertiesIcon {...getIconProps(true)} />,
				},
				{
					title: "Agendamentos",
					href: {
						pathname: "/",
					},
					icon: <PropertiesIcon {...getIconProps(true)} />,
				},
			],
		},
		{
			id: "marketing",
			title: "Marketing",
			items: [
				{
					title: "Canais e Integrações",
					href: {
						pathname: "/",
					},
					icon: <PropertiesIcon {...getIconProps(true)} />,
				},
				{
					title: "Meu website",
					href: {
						pathname: "/",
					},
					icon: <PropertiesIcon {...getIconProps(true)} />,
				},
			],
		},
	];

	return (
		<Box className="mt-8">
			{menuSections.map((section) => (
				<MenuSection
					key={`sidebar-menu-section-${section.id}`}
					{...(section as MenuSectionProps)}
				/>
			))}
		</Box>
	);
};

export default SidebarMenu;
