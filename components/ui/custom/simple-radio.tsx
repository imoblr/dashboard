import { cn } from "@/utils";
import * as React from "react";
import { Center } from "./center";
import { Box } from "./box";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ComponentProps<T extends React.ElementType<any>> =
	React.ComponentPropsWithoutRef<T> & {
		indicatorClassName?: string;
		checked?: boolean;
	};
type CenterRef = React.ElementRef<typeof Center>;
type SlottableViewProps = ComponentProps<typeof Center>;

const SimpleRadio = React.forwardRef<CenterRef, SlottableViewProps>(
	({ className, indicatorClassName, checked, ...props }, ref) => {
		return (
			<Center
				className={cn(
					"transition duration-300 ease-in-out w-[18px] h-[18px] border-[1.5px] border-border-darkest rounded-full",
					{ "border-primary": checked },
					className,
				)}
				ref={ref}
				{...props}
			>
				<Box
					className={cn(
						"transition duration-300 ease-in-out w-[10px] h-[10px] rounded-full bg-primary scale-0 opacity-0",
						{ "scale-100": checked, "opacity-100": checked },
						indicatorClassName,
					)}
				/>
			</Center>
		);
	},
);
SimpleRadio.displayName = "SimpleRadio";

export { SimpleRadio };
