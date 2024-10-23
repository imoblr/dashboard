import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import * as React from "react";
import { Platform } from "react-native";
import { cn } from "@/utils";
import { Icon } from "./custom";
import Tick from "../../assets/icons/tick.svg";

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
	return (
		<CheckboxPrimitive.Root
			ref={ref}
			className={cn(
				"web:peer h-5 native:h-[20] native:w-[20] w-5 shrink-0 native:rounded rounded border border-border shadow-xs web:ring-offset-background web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
				props.checked && "border-primary bg-primary",
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				className={cn("h-full w-full items-center justify-center")}
			>
				<Icon as={Tick} className="text-text-on-brand h-[16px] w-[16px]" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
