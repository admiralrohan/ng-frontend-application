import cinzel from '@fonts/cinzel';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
	--gap: ${({ theme }) => theme.spacing['4xs']};
	padding: var(--gap);
	color: white;
	background-color: ${({ theme }) => theme.colors.lighterBlack};
	border: 1px solid ${({ theme }) => theme.colors.lightGrey};
	border-radius: ${({ theme }) => theme.radius.xl};

	/* To make this 'Link' look like usual 'div' */
	display: block;
	text-decoration: none;

	transition: background-color 300ms;

	&:hover {
		background-color: ${({ theme }) => theme.colors.black};
		transition: background-color 50ms;
	}
`;

export const Title = styled.h2`
	font-family: ${cinzel};
	font-size: ${14 / 16}rem;
	padding-left: var(--gap);
	padding-right: var(--gap);
	margin: 0;
`;

export const ImgContainer = styled.div`
	position: relative; /* For using NextJS Image */
	height: 100px;
	margin-bottom: var(--gap);
`;

export const Img = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top;
	border-radius: ${({ theme }) => theme.radius.l};
`;

export const List = styled.dl`
	font-size: ${12 / 16}rem;
	padding: var(--gap);
	text-transform: capitalize;

	display: grid;
	justify-content: space-between;
	gap: var(--gap);
	grid-template-columns: max-content 1fr max-content 1fr;

	/* 50px extra for padding, took the number roughly. We have to change the number manually if padding is increased in future. */
	@media (max-width: ${({ theme }) => theme.extras.homeCardWidth + 50}px) {
		grid-template-columns: max-content 1fr;
	}
`;
export const DT = styled.dt`
	color: ${({ theme }) => theme.colors.gold};
`;
export const DD = styled.dd``;
export const BlueDD = styled(DD)`
	color: ${({ theme }) => theme.colors.blue};
`;
