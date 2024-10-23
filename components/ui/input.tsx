import * as React from "react";
import { TextInput } from "react-native";
import { cn } from "@/utils";

const Input = React.forwardRef<
	React.ElementRef<typeof TextInput>,
	React.ComponentPropsWithoutRef<typeof TextInput>
>(({ className, placeholderClassName, ...props }, ref) => {
	return (
		<TextInput
			ref={ref}
			className={cn(
				"web:flex h-12 web:w-full rounded-md border border-border bg-background px-4 font-base native:text-lg text-base text-text native:leading-[1.25] shadow-xs ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 lg:text-sm",
				props.editable === false && "web:cursor-not-allowed opacity-50",
				className,
			)}
			placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
			{...props}
		/>
	);
});

Input.displayName = "Input";

export { Input };
