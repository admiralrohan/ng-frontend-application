import Head from 'next/head';
import styled from 'styled-components';

interface ILayout {
	children: React.ReactNode;
}

function Layout({ children }: ILayout) {
	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<Header>
				<Logo src='/logo.svg' alt='Logo' />
			</Header>

			{children}
		</>
	);
}

const Header = styled.header`
	padding-top: ${({ theme }) => theme.spacing['4xs']};
	padding-left: ${({ theme }) => theme.spacing.s};
	padding-right: ${({ theme }) => theme.spacing.s};
`;

// Using default img tag here as facing issue with Responsiveness
const Logo = styled.img`
	max-width: 285px;
	width: 100%;
`;

export default Layout;
