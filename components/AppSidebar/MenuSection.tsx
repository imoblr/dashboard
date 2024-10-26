import type { IIconComponentType } from "@gluestack-ui/icon/lib/typescript/createIcon";
import { Link, type Href } from "expo-router";
import { Box, Icon, Text } from "../ui";

export type SectionItemProps = {
	isActive?: boolean;
	title: string;
	href: Href<string | object>;
	icon: IIconComponentType<object> | React.ReactNode;
};

export type MenuSectionProps = {
	id: string;
	title?: string;
	items: SectionItemProps[];
};

const MenuSection = ({ title, items }: MenuSectionProps) => {
	return (
		<Box className="flex flex-col gap-1">
			{title && (
				<Text className="text-text-quaternary text-xs font-medium uppercase ml-3 mt-4">
					{title}
				</Text>
			)}
			{items.map((item) => (
				<Link
					asChild
					href={item.href}
					key={`menu-${title}-${item.title}`}
					className={item.isActive ? "pointer-events-none" : ""}
				>
					<Box>
						<Box className="flex flex-row items-center gap-3 px-3 py-2 text-text-secondary">
							<Icon
								as={item.icon}
								size="xl"
								className={
									item.isActive ? "text-primary-900" : "text-text-tertiary"
								}
							/>
							<Text
								className={`text-sm ${item.isActive ? "text-primary-800" : "text-text-tertiary"}`}
							>
								{item.title}
							</Text>
						</Box>
						{item.isActive && (
							<Box className="absolute left-0 top-0 h-full w-full rounded-lg bg-primary-100 z-[-1]" />
						)}
					</Box>
				</Link>
			))}
		</Box>
	);
};

export default MenuSection;
