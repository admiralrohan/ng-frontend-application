import ErrorBoundary from '@components/ErrorBoundary';
import Layout from '@components/Layout';
import GlobalStyle from '@styles/GlobalStyles';
import { darkTheme } from '@styles/theme';
import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

const config: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5
		},
		mutations: {
			retry: 5,
			retryDelay: 500
		}
	}
};

const queryClient = new QueryClient(config);

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.svg' />
				<meta name='robots' content='noindex' />
			</Head>

			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={darkTheme}>
					<GlobalStyle />

					<Layout>
						<ErrorBoundary>
							<Component {...pageProps} />
						</ErrorBoundary>
					</Layout>
				</ThemeProvider>

				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
}

export default App;
