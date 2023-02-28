import styled from 'styled-components';

interface IHideOnTablet {
	children: React.ReactNode;
}

function HideOnTablet({ children }: IHideOnTablet) {
	return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
	@media ${({ theme }) => theme.queries.tabletAndSmaller} {
		display: none;
	}
`;

export default HideOnTablet;
