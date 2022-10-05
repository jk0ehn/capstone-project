import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		background-color: #F5F5F5;
		font-size: 16px;
		
	}

	body {
		margin: 0;
		font-size: 1rem;
	}
`;
