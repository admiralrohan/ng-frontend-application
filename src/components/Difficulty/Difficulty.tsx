import styled from 'styled-components';
import { HollowSwordIcon, SolidSwordIcon } from './SwordIcon';

const MAX_VALUE = 5;
interface IDifficulty {
	value: number;
}

function Difficulty({ value }: IDifficulty) {
	if (value < 0 || value > MAX_VALUE) throw new Error();

	return (
		<Wrapper>
			{new Array(MAX_VALUE).fill(null).map((_, i) => {
				const Component = i < Math.floor(value) ? SolidSwordIcon : HollowSwordIcon;

				return <Component key={i} />;
			})}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	gap: 1.5px;
`;

export default Difficulty;
