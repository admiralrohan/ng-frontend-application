import styled from 'styled-components';

interface IHideOnMobile {
	children: React.ReactNode;
}

function HideOnMobile({ children }: IHideOnMobile) {
	return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
	@media ${({ theme }) => theme.queries.mobileAndSmaller} {
		display: none;
	}
`;

export default HideOnMobile;
