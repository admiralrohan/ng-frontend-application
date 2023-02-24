import cinzel from '@fonts/cinzel';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const Main = styled.main`
	color: white;
	/* Will act is necessary gap in vertical axes, also helps in horizontal axes for mobile view */
	padding: ${({ theme }) => theme.spacing.m} ${({ theme }) => theme.spacing['2xs']};

	display: flex;
	justify-content: center;
`;

export const DetailSection = styled.section`
	max-width: 755px;
	--parent-padding: ${({ theme }) => theme.spacing['2xs']};
	padding: var(--parent-padding);
	font-size: ${14 / 16}rem;
	background-color: ${({ theme }) => theme.colors.lighterBlack};
	border: 1px solid ${({ theme }) => theme.colors.lightGrey};
	border-radius: ${({ theme }) => theme.radius.xl};
`;

export const CoverImgContainer = styled.div`
	position: relative; /* For NextJS image */
	height: 270px; /* Otherwise this element will collapse and image will not be visible */

	/* First offset the padding applied to whole container, then add new padding for the image */
	--img-padding: ${({ theme }) => theme.spacing['5xs']};
	--img-negative-margin: calc(-1 * var(--parent-padding) + var(--img-padding));
	margin-top: var(--img-negative-margin);
	margin-left: var(--img-negative-margin);
	margin-right: var(--img-negative-margin);
`;

export const CoverImg = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top;
	border-top-left-radius: ${({ theme }) => theme.radius.l};
	border-top-right-radius: ${({ theme }) => theme.radius.l};
`;

export const CrossIconWrapper = styled(Link)`
	position: absolute;
	top: 0;
	right: 0;
	/* Using 'translate' position according to icon's width instead of the container. Had we used 'top' and 'right' for this we needed to use magic number which would break under responsiveness. */
	/* Different value is used to fix optical illusion. Same px value on vertical axes feels more to our eyes than horizontal axes. */
	transform: translate(-100%, 75%);

	/* To fix distorted outline, it was showing as rectangle which doesn't look good. Useful for keyboard users. */
	line-height: 0;
`;
export const CrossIcon = styled(Image)`
	/* To fix alignment inside the outline. Useful for keyboard users. */
	transform: translateX(1px);

	&:hover {
		opacity: 0.5;
	}

	@media (prefers-reduced-motion: no-preference) {
		transition: opacity 500ms;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	--gap: ${({ theme }) => theme.spacing['3xs']};
	gap: var(--gap);
	margin-top: var(--gap);
	margin-bottom: var(--gap);
`;

export const Title = styled.h2`
	font-size: ${20 / 16}rem;
	font-family: ${cinzel};
	margin: 0;
`;

export const List = styled.dl`
	text-transform: capitalize;
	display: grid;
	row-gap: ${({ theme }) => theme.spacing['4xs']};
	column-gap: ${({ theme }) => theme.spacing['2xs']};
	grid-template-columns: max-content 1fr max-content 1fr;

	@media ${({ theme }) => theme.queries.mobileAndSmaller} {
		grid-template-columns: max-content 1fr;
	}
`;
export const DT = styled.dt`
	color: ${({ theme }) => theme.colors.gold};
`;
export const DD = styled.dd``;

export const Desc = styled.p`
	color: ${({ theme }) => theme.colors.grey};
	min-height: 150px;
	font-size: ${15 / 16}rem;
`;

export const Footer = styled.div`
	font-family: ${cinzel};
	font-weight: 700;

	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	@media ${({ theme }) => theme.queries.mobileAndSmaller} {
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing['4xs']};
	}
`;

export const FooterLeftSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing['4xs']};

	@media ${({ theme }) => theme.queries.mobileAndSmaller} {
		align-self: flex-start;
	}
`;
export const QuestRewardsTitle = styled.div`
	font-size: ${15 / 16}rem;
`;
export const QuestRewardBox = styled.div`
	color: white;
	background: linear-gradient(180deg, rgba(7, 15, 29, 0) 50%, rgba(54, 77, 137, 0.4) 100%);
	border: 0.6px solid ${({ theme }) => theme.colors.gold};
	font-size: ${8 / 16}rem;
	width: fit-content;
	padding: ${({ theme }) => theme.spacing['3xs']};
`;

export const FooterRightSection = styled.div``;
