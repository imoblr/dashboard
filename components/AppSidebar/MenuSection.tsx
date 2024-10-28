import type { IIconComponentType } from "@gluestack-ui/icon/lib/typescript/createIcon";
import { Link, type Href } from "expo-router";
import { Box, Center, Icon, Text } from "../ui";
import { AnimatePresence, MotiView, View } from "moti";
import { Easing } from "react-native-reanimated";

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
	isCollapsed?: boolean;
};

const MenuSection = ({ title, items, isCollapsed }: MenuSectionProps) => {
	return (
		<Box className="flex flex-col gap-1">
			<AnimatePresence exitBeforeEnter>
				{!!title && !isCollapsed && (
					<View
						from={{
							opacity: 0,
							height: 0,
						}}
						animate={{
							opacity: 1,
							height: 32,
						}}
						exit={{
							opacity: 0,
							height: 0,
						}}
						transition={{
							type: "timing",
							easing: Easing.elastic(1),
							duration: 400,
						}}
						exitTransition={{
							type: "timing",
							easing: Easing.linear,
							duration: 50,
						}}
						className="overflow-hidden"
					>
						<Text className="text-text-quaternary select-none text-xs font-medium uppercase ml-3 mt-4">
							{title}
						</Text>
					</View>
				)}
			</AnimatePresence>
			{items.map((item) => (
				<Link
					asChild
					href={item.href}
					key={`menu-${title}-${item.title}`}
					className={item.isActive ? "pointer-events-none" : ""}
				>
					<Box>
						<Box className="flex flex-row items-center gap-3 px-3 py-2 text-text-secondary">
							<Center className="w-[24px] h-[24px]">
								<Icon
									as={item.icon}
									size="xl"
									className={`transition-all ease-in-out duration-300 select-none ${item.isActive ? "text-primary-900" : "text-text-tertiary"}`}
								/>
							</Center>
							<AnimatePresence exitBeforeEnter>
								{!isCollapsed && (
									<View
										from={{
											opacity: 0,
											width: 0,
										}}
										animate={{
											opacity: 1,
											width: 160,
										}}
										exit={{
											opacity: 0,
											width: 0,
										}}
										transition={{
											type: "timing",
											easing: Easing.elastic(1),
											duration: 400,
										}}
										exitTransition={{
											type: "timing",
											easing: Easing.linear,
											duration: 50,
										}}
										className="overflow-hidden"
									>
										<Text
											className={`whitespace-nowrap transition-all ease-in-out duration-300 select-none text-sm ${item.isActive ? "text-primary-900" : "text-text-secondary"}`}
										>
											{item.title}
										</Text>
									</View>
								)}
							</AnimatePresence>
						</Box>
						<AnimatePresence exitBeforeEnter>
							{item.isActive && (
								<View
									from={{
										opacity: 0,
										width: 0,
									}}
									animate={{
										opacity: 1,
										width: isCollapsed ? 46 : 220,
									}}
									exit={{
										opacity: 0,
										width: 0,
									}}
									transition={{
										type: "timing",
										easing: Easing.elastic(1),
										duration: 300,
									}}
									exitTransition={{
										type: "timing",
										easing: Easing.linear,
										duration: 200,
									}}
									className="absolute left-0 top-0 h-full w-full rounded-lg bg-background-darker z-[-1]"
								/>
							)}
						</AnimatePresence>
					</Box>
				</Link>
			))}
		</Box>
	);
};

export default MenuSection;
