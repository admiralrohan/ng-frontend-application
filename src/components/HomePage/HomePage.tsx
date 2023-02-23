import Card from '@components/Card';
import lato from '@fonts/lato';
import { IHome } from '@interfaces/Pages.interface';
import styled from 'styled-components';

function HomePage({ quests }: IHome) {
	return (
		<Main>
			<ListOfQuests>
				{quests.map((quest: any) => (
					<li key={quest.id}>
						<Card quest={quest} />
					</li>
				))}
			</ListOfQuests>
		</Main>
	);
}

const Main = styled.main`
	font-family: ${lato};
	margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const ListOfQuests = styled.ul`
	--card-size: ${({ theme }) => theme.extras.homeCardWidth}px;
	--max-columns: 3;
	--min-column-width: min(var(--card-size), 100%); /* 100% is used in mobile view */
	--gap: ${({ theme }) => theme.spacing['s']};

	display: grid;
	gap: var(--gap);
	padding: var(--gap);
	/* We are auto generating columns but setting the size of container so it can never fill more than 3 columns */
	grid-template-columns: repeat(auto-fill, var(--min-column-width));

	/* Determine max size of container so it never shows more than 3 quests per row */
	--size-all-cards: var(--max-columns) * var(--card-size);
	--extra-space-gap: calc((var(--max-columns) - 1) * var(--gap));
	--extra-space-padding: 2 * var(--gap); /* Padding is applied on both sides */
	max-width: calc(var(--size-all-cards) + var(--extra-space-gap) + var(--extra-space-padding));

	/* Center align the whole container within the window */
	margin-left: auto;
	margin-right: auto;
	/* Center block of cards within the container */
	justify-content: center;
`;

export default HomePage;
