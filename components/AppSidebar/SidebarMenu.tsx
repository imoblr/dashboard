import { Box, Icon } from "../ui";
import { PropertiesIcon } from "./icons/PropertiesIcon";
import MenuSection, { type MenuSectionProps } from "./MenuSection";
import { usePathname } from "expo-router";
import DashboardIcon from "@/assets/icons/duotone/dashboard-browsing.svg";
import BuildingIcon from "@/assets/icons/duotone/buildings.svg";
import CustomersIcon from "@/assets/icons/duotone/mentoring.svg";
import CalendarIcon from "@/assets/icons/duotone/calendar.svg";
import BlockchainIcon from "@/assets/icons/duotone/blockchain.svg";
import BrowserIcon from "@/assets/icons/duotone/browser.svg";

const menuIconSize = 60;

const SidebarMenu = () => {
	const pathname = usePathname();

	const menuSections = [
		{
			id: "dashboard",
			title: undefined,
			items: [
				{
					isActive: pathname === "/",
					title: "Visão geral",
					href: {
						pathname: "/",
					},
					icon: (
						<Icon
							as={DashboardIcon}
							size="xl"
							className={
								pathname === "/" ? "text-primary-900" : "text-text-secondary"
							}
						/>
					),
				},
			],
		},
		{
			id: "main",
			title: "Menu principal",
			items: [
				{
					isActive: pathname === "/imoveis",
					title: "Imóveis",
					href: {
						pathname: "/imoveis",
					},
					icon: (
						<Icon
							as={BuildingIcon}
							size="xl"
							className={
								pathname === "/imoveis"
									? "text-primary-900"
									: "text-text-secondary"
							}
						/>
					),
				},
				{
					isActive: pathname === "/clientes",
					title: "Clientes e leads",
					href: {
						pathname: "/clientes",
					},
					icon: (
						<Icon
							as={CustomersIcon}
							size="xl"
							className={
								pathname === "/clientes"
									? "text-primary-900"
									: "text-text-secondary"
							}
						/>
					),
				},
				{
					isActive: pathname === "/agenda",
					title: "Agendamentos",
					href: {
						pathname: "/agenda",
					},
					icon: (
						<Icon
							as={CalendarIcon}
							size="xl"
							className={
								pathname === "/agenda"
									? "text-primary-900"
									: "text-text-secondary"
							}
						/>
					),
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
						pathname: "/canais",
					},
					icon: (
						<Icon
							as={BlockchainIcon}
							size="xl"
							className={
								pathname === "/canais"
									? "text-primary-900"
									: "text-text-secondary"
							}
						/>
					),
				},
				{
					title: "Meu website",
					href: {
						pathname: "/website",
					},
					icon: (
						<Icon
							as={BrowserIcon}
							size="xl"
							className={
								pathname === "/website"
									? "text-primary-900"
									: "text-text-secondary"
							}
						/>
					),
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
