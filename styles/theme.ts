// theme.ts
import { DefaultTheme } from 'styled-components';

export const BREAKPOINTS = {
	mobile: 375,
	tablet: 750,
	laptop: 1100
};

export const defaultTheme = {
	radius: {
		s: '3px',
		m: '5px',
		l: '7px',
		xl: '10px'
	},
	spacing: {
		unset: 'unset',
		'6xs': '2px',
		'5xs': '4px',
		'4xs': '8px',
		'3xs': '12px',
		'2xs': '16px',
		xs: '20px',
		s: '24px',
		m: '32px',
		l: '40px',
		xl: '48px',
		'2xl': '64px',
		'3xl': '80px',
		'4xl': '100px',
		'5xl': '120px',
		'6xl': '140px',
		'7xl': '160px',
		'8xl': '180px'
	},
	queries: {
		mobileAndSmaller: `(max-width: ${BREAKPOINTS.mobile / 16}rem)`,
		tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
		laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`
	},
	extras: {
		/** To dynamically generate media query value, as CSS variables can't be used inside media query. Want to have source of truth for the card structure. */
		homeCardWidth: 355
	}
};

export const darkTheme: DefaultTheme = {
	...defaultTheme,
	colors: {
		// set theme colors
		gold: '#BEA77E',
		white: '#FFFFF4',
		grey: '#8E8E8E',
		lightGrey: '#3A3A3A',
		darkGrey: '#333030',
		lighterBlack: '#1D1C1A',
		black: '#151515',
		blue: '#98A7F5',
		green: '#93D788'
	}
};
