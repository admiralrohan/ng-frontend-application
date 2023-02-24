import Difficulty from '@components/Difficulty';
import {
	Main,
	DetailSection,
	CoverImgContainer,
	CoverImg,
	TitleContainer,
	Title,
	List,
	DT,
	DD,
	Desc,
	Footer,
	FooterLeftSection,
	FooterRightSection,
	CrossIcon,
	CrossIconWrapper,
	QuestRewardBox,
	QuestRewardsTitle
} from './SingleQuestPage.styled';
import { TitleDecorationLeftArrow, TitleDecorationRightArrow } from '@components/TitleDecoration';
import { ISingleQuest } from '@interfaces/Pages.interface';
import Image from 'next/image';
import React from 'react';
import HideOnTablet from '@components/HideOnTablet';
import LinkButton from '@components/LinkButton';

interface IQuestRewards {
	type: string;
	imgSource: string;
	amount: string;
}

function SingleQuestPage({ quest }: ISingleQuest) {
	// This will come from API in real scenario
	const questRewards: IQuestRewards[] = [
		{
			type: 'EXP',
			imgSource: '/EXP.svg',
			amount: '+ ' + quest.experience
		}
	];

	return (
		<Main>
			<DetailSection>
				<CoverImgContainer>
					<CoverImg src={quest.cover} alt={quest.title} fill priority />
					<CrossIconWrapper href='/'>
						<CrossIcon src='/cross-icon.svg' alt='Cross icon' width={16} height={16} priority />
					</CrossIconWrapper>
				</CoverImgContainer>

				<TitleContainer>
					<HideOnTablet>
						<TitleDecorationLeftArrow />
					</HideOnTablet>
					<Title>{quest.title}</Title>
					<HideOnTablet>
						<TitleDecorationRightArrow />
					</HideOnTablet>
				</TitleContainer>

				<List>
					<DT>Skill tree</DT>
					<DD>{quest.skillTree}</DD>

					<DT>Difficulty</DT>
					<DD>
						<Difficulty value={quest.difficulty} />
					</DD>

					<DT>Skill</DT>
					<DD>{quest.skill}</DD>

					<DT>Quest type</DT>
					<DD>{quest.type}</DD>
				</List>
				<Desc>{quest.description}</Desc>

				<Footer>
					<FooterLeftSection>
						<QuestRewardsTitle>Quest rewards</QuestRewardsTitle>
						{questRewards.map((questReward) => (
							<QuestRewardBox key={questReward.type}>
								<Image src={questReward.imgSource} alt={questReward.type + ' Icon'} width={28} height={18} />
								<div>{questReward.amount}</div>
							</QuestRewardBox>
						))}
					</FooterLeftSection>

					<FooterRightSection>
						<LinkButton href='/'>Go back</LinkButton>
					</FooterRightSection>
				</Footer>
			</DetailSection>
		</Main>
	);
}

export default SingleQuestPage;
