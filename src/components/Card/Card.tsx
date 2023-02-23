import Difficulty from '@components/Difficulty';
import Quest from '@interfaces/Quest.interface';
import { Wrapper, ImgContainer, Img, Title, List, DT, BlueDD, DD } from './Card.styled';

interface ICard {
	quest: Quest;
}

function Card({ quest }: ICard) {
	return (
		<Wrapper href={'/quests/' + quest.id}>
			<ImgContainer>
				<Img src={quest.cover} alt={quest.title} fill></Img>
			</ImgContainer>

			<Title>{quest.title}</Title>

			<List>
				<DT>Skill tree</DT>
				<BlueDD>{quest.skillTree}</BlueDD>

				<DT>Difficulty</DT>
				<DD>
					<Difficulty value={quest.difficulty} />
				</DD>

				<DT>Skill</DT>
				<DD>{quest.skill}</DD>

				<DT>Experience</DT>
				<DD>{quest.experience}</DD>

				<DT>Type</DT>
				<DD>{quest.type}</DD>

				<DT>Gold</DT>
				<DD>{quest.gold}</DD>
			</List>
		</Wrapper>
	);
}

export default Card;
