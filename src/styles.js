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
		color: #5E5E5E;
		font-family: Poppins,sans-serif;
		font-size: 1rem;
		
		
	}

	


`;
