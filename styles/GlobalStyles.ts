import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
//========================================================================================================
// GENERAL
//========================================================================================================
* {
	box-sizing: border-box;
}
*::before {
	box-sizing: border-box;
}
*::after {
	box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.black};
	margin: 0;
}

/* Scrollbar styles */
::-webkit-scrollbar {
	width: 6px;
	height: 6px;
}

::-webkit-scrollbar-thumb {
	border-radius: 6px;
	box-shadow: rgb(142 142 142) 0px 0px 6px inset;
}

/* Reset browser default styles */
ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

dl, dd {
	margin: 0;
}

`;

export default GlobalStyle;
