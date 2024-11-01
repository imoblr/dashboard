import { cva, type VariantProps } from "class-variance-authority";
import { Image } from "react-native";
import { useColorScheme } from "nativewind";
import Moon from "@/assets/icons/moon.svg";
import ImoblrSymbolLight from "@/assets/logos/imoblr-symbol-light-background.svg";

import { Box, Icon, Text } from "./ui";
import { forwardRef } from "react";

const imoblrSymbolVariants = cva("flex", {
	variants: {
		size: {
			default: "w-[80px] h-[80px]",
			xs: "w-[30px] h-30px]",
			sm: "w-[60px] h-[60px]",
			md: "w-[80px] h-[80px]",
			lg: "w-[100px] h-[100px]",
			xl: "w-[100px] h-[100px]",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

type ImoblrSymbolProps = React.ComponentPropsWithoutRef<typeof Box> &
	VariantProps<typeof imoblrSymbolVariants>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ComponentPropsWithAsChild<T extends React.ElementType<any>> =
	React.ComponentPropsWithoutRef<T> & {
		asChild?: boolean;
	};

const ImoblrSymbol = forwardRef<
	React.ElementRef<typeof Box>,
	ImoblrSymbolProps
>(({ className, size, ...props }, ref) => {
	const { colorScheme } = useColorScheme();

	return (
		<Box
			className={imoblrSymbolVariants({ size, className })}
			ref={ref}
			{...props}
		>
			<Icon
				as={ImoblrSymbolLight}
				className="stroke-primary-500 w-[100%] h-[100%]"
			/>
		</Box>
	);
});
ImoblrSymbol.displayName = "ImoblrSymbol";

export { ImoblrSymbol, imoblrSymbolVariants };
export type { ImoblrSymbolProps };
