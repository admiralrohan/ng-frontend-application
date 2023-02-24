import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

interface ILinkButton {
	children: React.ReactNode;
	href?: string | undefined;
	delegated?: string[];
}

/**
 * Component to hold commong styles. Will render Link if `href` is passed otherwise normal button will be rendered.
 */
function LinkButton({ children, href, ...delegated }: ILinkButton) {
	return typeof href === 'string' ? (
		<LinkWrapper href={href} {...delegated}>
			{children}
		</LinkWrapper>
	) : (
		<ButtonWrapper {...delegated}>{children}</ButtonWrapper>
	);
}

const CommonStyle = css`
	color: white;
	background-color: ${({ theme }) => theme.colors.lighterBlack};
	border: 0.6px solid ${({ theme }) => theme.colors.gold};
	border-radius: ${({ theme }) => theme.radius.s};
	text-transform: capitalize;
	padding: ${({ theme }) => theme.spacing['4xs']} ${({ theme }) => theme.spacing['2xs']};

	&:hover,
	&:focus {
		/* Need visual cues for user when the element is highlighted */
		color: ${({ theme }) => theme.colors.gold};
	}

	@media (prefers-reduced-motion: no-preference) {
		transition: color 500ms;
	}
`;

const LinkWrapper = styled(Link)`
	${CommonStyle}

	display: block; /* To make the padding work properly */
	text-decoration: none;
`;
const ButtonWrapper = styled.button`
	${CommonStyle}

	font-family: inherit;
	font-weight: inherit;
	cursor: pointer;
`;

export default LinkButton;
