import { Defs, LinearGradient, Path, Stop, Svg } from "react-native-svg";
import { createIcon } from "@gluestack-ui/icon";
import { useCurrentColorScheme } from "@/hooks";

const CustomersIcon = ({
	isActive,
	...props
}: { isActive?: boolean; width: number; height: number }) => {
	console.log({ isActive });
	const { colorScheme } = useCurrentColorScheme();

	const primaryGradientStart =
		colorScheme[isActive ? "--color-primary-600" : "--color-gray-300"];
	const primaryGradientEnd =
		colorScheme[isActive ? "--color-primary-800" : "--color-gray-500"];
	const secondaryGradientStart =
		colorScheme[isActive ? "--color-primary-300" : "--color-gray-200"];
	const secondaryGradientEnd =
		colorScheme[isActive ? "--color-primary-500" : "--color-gray-400"];

	console.log(
		primaryGradientStart,
		primaryGradientEnd,
		secondaryGradientStart,
		secondaryGradientEnd,
	);

	const IconComponent = createIcon({
		Root: Svg,
		viewBox: "0 0 168 168",
		path: (
			<>
				<Path
					d="M98.0005 57.75C93.5436 57.75 89.6075 57.9756 86.2636 58.7103C82.8595 59.4581 79.7424 60.8028 77.2728 63.2724C74.8032 65.742 73.4585 68.8589 72.7109 72.2624C71.9766 75.607 71.7505 79.5431 71.7505 84V145.25H104.998V133C104.998 129.134 108.132 126 111.998 126C115.864 126 118.998 129.134 118.998 133V145.25H152.25V84C152.25 79.5431 152.025 75.607 151.29 72.2624C150.542 68.8589 149.198 65.742 146.728 63.2724C144.259 60.8028 141.141 59.4581 137.738 58.7103C134.393 57.9756 130.458 57.75 126 57.75H98.0005Z"
					fill="url(#paint0_linear_1743_8)"
				/>
				<Path
					d="M84.0106 48.4548C88.4759 47.4739 93.3143 47.25 98.0008 47.25H106.051C108.031 47.25 109.021 47.25 109.636 46.6349C110.251 46.0198 110.251 45.0299 110.251 43.05V35C110.251 30.5429 110.025 26.6069 109.29 23.2626C108.543 19.8589 107.198 16.742 104.729 14.2724C102.259 11.8028 99.1418 10.4581 95.7384 9.71033C92.3938 8.97561 88.4584 8.75 84.0008 8.75H42.001C37.5439 8.75 33.6079 8.97561 30.2637 9.71033C26.8599 10.458 23.7431 11.8028 21.2734 14.2724C18.8038 16.742 17.459 19.8589 16.7113 23.2626C15.9767 26.6069 15.751 30.5429 15.751 35V36.75H34.9979C37.8974 36.75 40.2479 39.1005 40.2479 42C40.2479 44.8995 37.8974 47.25 34.9979 47.25H15.751V64.75H34.9979C37.8974 64.75 40.2479 67.1005 40.2479 70C40.2479 72.8994 37.8974 75.25 34.9979 75.25H15.751V92.75H34.9979C37.8974 92.75 40.2479 95.1006 40.2479 98C40.2479 100.899 37.8974 103.25 34.9979 103.25H15.751V145.25H61.251V84C61.251 79.3135 61.4749 74.4751 62.4558 70.0098C63.4754 65.3687 65.5161 60.1805 69.8488 55.8478C74.1812 51.5152 79.3696 49.4744 84.0106 48.4548Z"
					fill="url(#paint1_linear_1743_8)"
				/>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M99.7505 84C99.7505 81.1006 102.101 78.75 105 78.75H119C121.9 78.75 124.25 81.1006 124.25 84C124.25 86.8994 121.9 89.25 119 89.25H105C102.101 89.25 99.7505 86.8994 99.7505 84ZM99.7505 105C99.7505 102.101 102.101 99.75 105 99.75H119C121.9 99.75 124.25 102.101 124.25 105C124.25 107.899 121.9 110.25 119 110.25H105C102.101 110.25 99.7505 107.899 99.7505 105Z"
					fill="#F4EBFF"
				/>
				<Path
					d="M119.001 133V145.25H105.001V133C105.001 129.134 108.135 126 112.001 126C115.867 126 119.001 129.134 119.001 133Z"
					fill={primaryGradientEnd}
				/>
				<Path
					d="M15.751 145.25C11.885 145.25 8.75098 148.384 8.75098 152.25C8.75098 156.116 11.885 159.25 15.751 159.25H152.251C156.117 159.25 159.251 156.116 159.251 152.25C159.251 148.384 156.117 145.25 152.251 145.25H15.751Z"
					fill={primaryGradientEnd}
				/>
				<Defs>
					<LinearGradient
						id="paint0_linear_1743_8"
						x1="112"
						y1="57.75"
						x2="112"
						y2="145.25"
						gradientUnits="userSpaceOnUse"
					>
						<Stop stopColor={secondaryGradientStart} />
						<Stop offset="1" stopColor={secondaryGradientEnd} />
					</LinearGradient>
					<LinearGradient
						id="paint1_linear_1743_8"
						x1="63.0009"
						y1="8.75"
						x2="63.0009"
						y2="145.25"
						gradientUnits="userSpaceOnUse"
					>
						<Stop stopColor={primaryGradientStart} />
						<Stop offset="1" stopColor={primaryGradientEnd} />
					</LinearGradient>
				</Defs>
			</>
		),
	});

	return <IconComponent {...props} />;
};

CustomersIcon.displayName = "CustomersIcon";
export { CustomersIcon };
