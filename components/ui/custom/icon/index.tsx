"use client";
import React, { useMemo } from "react";
import { createIcon } from "./utils/createNativeIcon";
import { Svg } from "react-native-svg";
import { tva } from "@/utils";
import { cssInterop } from "nativewind";

const PrimitiveIcon = React.forwardRef(
	(
		{
			height,
			width,
			fill,
			color,
			size,
			stroke = "currentColor",
			as: AsComp,
			...props
		}: any,
		ref?: any,
	) => {
		const sizeProps = useMemo(() => {
			if (size) return { size };
			if (height && width) return { height, width };
			if (height) return { height };
			if (width) return { width };
			return {};
		}, [size, height, width]);

		const colorProps =
			stroke === "currentColor" && color !== undefined ? color : stroke;

		if (AsComp) {
			return (
				<AsComp
					ref={ref}
					fill={fill}
					{...props}
					{...sizeProps}
					stroke={colorProps}
				/>
			);
		}
		return (
			<Svg
				ref={ref}
				height={height}
				width={width}
				fill={fill}
				stroke={colorProps}
				{...props}
			/>
		);
	},
);

export const UIIcon = createIcon({
	Root: PrimitiveIcon,
});

const iconStyle = tva({
	base: "text-typography-950 fill-none",
	variants: {
		size: {
			"2xs": "h-3 w-3",
			xs: "h-3.5 w-3.5",
			sm: "h-4 w-4",
			md: "h-[18px] w-[18px]",
			lg: "h-5 w-5",
			xl: "h-6 w-6",
		},
	},
});

// @ts-ignore
cssInterop(UIIcon, {
	className: {
		target: "style",
		nativeStyleToProp: {
			height: true,
			width: true,
			// @ts-ignore
			fill: true,
			color: true,
			stroke: true,
		},
	},
});

export const Icon = React.forwardRef(
	({ size = "md", className, ...props }: any, ref?: any) => {
		if (typeof size === "number") {
			return (
				<UIIcon
					ref={ref}
					{...props}
					className={iconStyle({ class: className })}
					size={size}
				/>
			);
		}
		if (
			(props.height !== undefined || props.width !== undefined) &&
			size === undefined
		) {
			return (
				<UIIcon
					ref={ref}
					{...props}
					className={iconStyle({ class: className })}
				/>
			);
		}
		return (
			<UIIcon
				ref={ref}
				{...props}
				className={iconStyle({ size, class: className })}
			/>
		);
	},
);

type ParameterTypes = Omit<Parameters<typeof createIcon>[0], "Root">;

const createIconUI = ({ ...props }: ParameterTypes) => {
	const UIIcon = createIcon({ Root: Svg, ...props });

	return React.forwardRef(({ className, size, ...props }: any, ref) => {
		return (
			<UIIcon
				ref={ref}
				{...props}
				className={iconStyle({ size, class: className })}
			/>
		);
	});
};
export { createIconUI as createIcon };
