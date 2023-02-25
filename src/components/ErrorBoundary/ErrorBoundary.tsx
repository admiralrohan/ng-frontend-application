import React from 'react';
import styled from 'styled-components';

interface Props {
	children?: React.ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
	public state: State = {
		hasError: false
	};

	static getDerivedStateFromError(_: Error): State {
		// Update state so the next render will show the fallback UI
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.log('From ErrorBoundary:', { error, errorInfo });
	}

	render() {
		// Check if the error is thrown
		if (this.state.hasError) {
			return (
				<Wrapper>
					<h2>Oops, there is an error!</h2>
					<button type='button' onClick={() => this.setState({ hasError: false })}>
						Try again?
					</button>
				</Wrapper>
			);
		}

		// Return children components in case of no error
		return this.props.children;
	}
}

const Wrapper = styled.div`
	color: white;
	text-align: center;
`;

export default ErrorBoundary;
