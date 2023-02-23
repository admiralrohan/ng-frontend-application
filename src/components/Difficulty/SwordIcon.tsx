import { useTheme } from 'styled-components';

interface ISwordIcon {
	fillColor: string;
	fillOpacity: number;
}

/**
 * Used in Difficulty component.
 */
function SwordIcon({ fillColor, fillOpacity }: ISwordIcon) {
	return (
		<svg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M2.64049 1.17309H1.51424L6.79353 6.45202L7.38012 5.90067M10.2896 9.45514L9.79686 9.94784C9.74259 10.0022 9.67813 10.0454 9.60717 10.0748C9.53621 10.1042 9.46014 10.1194 9.38331 10.1194C9.30649 10.1194 9.23042 10.1042 9.15945 10.0748C9.08849 10.0454 9.02403 10.0022 8.96977 9.94784L7.13961 8.11782L5.56756 9.67803L4.74047 8.851L5.57343 8.0181L0.341064 2.7861V0H3.12736L8.35972 5.232L9.19267 4.39911L10.0198 5.22614L8.45357 6.79222L10.2837 8.62225C10.5184 8.85687 10.5184 9.22639 10.2896 9.45514Z'
				fill={fillColor}
				fillOpacity={fillOpacity}
			/>
		</svg>
	);
}

function HollowSwordIcon() {
	const theme = useTheme();

	return <SwordIcon fillColor={theme.colors.grey} fillOpacity={0.3} />;
}
function SolidSwordIcon() {
	const theme = useTheme();

	return <SwordIcon fillColor={theme.colors.gold} fillOpacity={1} />;
}

export { HollowSwordIcon, SolidSwordIcon };
