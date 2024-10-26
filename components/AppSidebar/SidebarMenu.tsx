import { Box } from "../ui";
import MenuSection, { type MenuSectionProps } from "./MenuSection";
import { usePathname } from "expo-router";
import DashboardIcon from "@/assets/icons/duotone/dashboard-browsing.svg";
import BuildingIcon from "@/assets/icons/duotone/buildings.svg";
import CustomersIcon from "@/assets/icons/duotone/mentoring.svg";
import CalendarIcon from "@/assets/icons/duotone/calendar.svg";
import BlockchainIcon from "@/assets/icons/duotone/blockchain.svg";
import BrowserIcon from "@/assets/icons/duotone/browser.svg";

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
					icon: DashboardIcon,
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
					icon: BuildingIcon,
				},
				{
					isActive: pathname === "/clientes",
					title: "Clientes e leads",
					href: {
						pathname: "/clientes",
					},
					icon: CustomersIcon,
				},
				{
					isActive: pathname === "/agenda",
					title: "Agendamentos",
					href: {
						pathname: "/agenda",
					},
					icon: CalendarIcon,
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
					icon: BlockchainIcon,
				},
				{
					title: "Meu website",
					href: {
						pathname: "/website",
					},
					icon: BrowserIcon,
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
