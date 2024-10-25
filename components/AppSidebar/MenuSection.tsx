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

const MenuSection = ({ title, items }: MenuSectionProps) => {
	return (
		<Box className="flex flex-col gap-2">
			{title && (
				<Text className="text-text-secondary text-sm font-medium">{title}</Text>
			)}
			{items.map((item) => (
				<Link asChild href={item.href} key={`menu-${title}-${item.title}`}>
					<Box>
						<Box className="flex flex-row items-center gap-3 rounded-lg p-2 text-text-secondary">
							{item.icon as React.ReactNode}
							<Text className="font-medium">{item.title}</Text>
						</Box>
						<Box className="absolute left-0 top-0 h-full w-full rounded-lg bg-primary z-[-1]" />
					</Box>
				</Link>
			))}
		</Box>
	);
};

export default MenuSection;
