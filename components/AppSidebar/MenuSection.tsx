import type { IIconComponentType } from "@gluestack-ui/icon/lib/typescript/createIcon";
import { Link, type Href } from "expo-router";
import { Box, Text } from "../ui";

export type SectionItemProps = {
	title: string;
	href: Href<string | object>;
	icon: IIconComponentType<object> | React.ReactNode;
};

export type MenuSectionProps = {
	title?: string;
	items: SectionItemProps[];
};

const SectionItem = ({ title, href, icon }: SectionItemProps) => {
	return (
		<Link asChild href={href} key={title}>
			<Box>
				<Box className="flex flex-row items-center gap-3 rounded-lg p-2 text-text-secondary">
					<Text className="font-medium">{title}</Text>
				</Box>
				<Box className="absolute left-0 top-0 h-full w-full rounded-lg bg-primary z-[-1]" />
			</Box>
		</Link>
	);
};

const MenuSection = ({ title, items }: MenuSectionProps) => {
	return (
		<Box className="flex flex-col gap-2">
			{title && (
				<Text className="text-text-secondary text-sm font-medium">{title}</Text>
			)}
			{items.map((item) => (
				<SectionItem
					key={`nav-item-${item.title}`}
					{...(item as SectionItemProps)}
				/>
			))}
		</Box>
	);
};

export default MenuSection;
