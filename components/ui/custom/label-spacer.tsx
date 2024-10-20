import { cn } from "@/utils";
import * as React from "react";
import { Center } from "./center";
import { Separator } from "../separator";
import { Text } from "../text";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ComponentPropsWithLabel<T extends React.ElementType<any>> =
	React.ComponentPropsWithoutRef<T> & {
		label?: string;
	};
type CenterRef = React.ElementRef<typeof Center>;
type SlottableViewProps = ComponentPropsWithLabel<typeof Center>;

const LabelSpacer = React.forwardRef<CenterRef, SlottableViewProps>(
	({ className, label = null, ...props }, ref) => {
		return (
			<Center
				className={cn("w-full flex-row my-0 py-4", className)}
				ref={ref}
				{...props}
			>
				<Separator className="w-[unset] flex-1" />
				{label && (
					<Text className="mx-4 text-text-quaternary text-xs uppercase">
						{label}
					</Text>
				)}
				<Separator className="w-[unset] flex-1" />
			</Center>
		);
	},
);
LabelSpacer.displayName = "LabelSpacer";

export { LabelSpacer };
