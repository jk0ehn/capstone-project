import {Global, css} from '@emotion/react';

export const globalStyle = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		background-color: #f5f5f5;
		font-size: 16px;
	}

	body {
		margin: 0;
		color: #5e5e5e;
		font-family: Poppins, sans-serif;
		font-size: 1rem;
	}
	@font-face {
		font-family: Poppins;
		font-weight: 100;
		src: url('/fonts/poppins-thin.ttf') format('truetype');
	}
	@font-face {
		font-family: Poppins;
		font-weight: 200;
		src: url('/fonts/poppins-light.ttf') format('truetype');
	}
	@font-face {
		font-family: Poppins;
		font-weight: 300;
		src: url('/fonts/poppins-medium.ttf') format('truetype');
	}
	@font-face {
		font-family: Poppins;
		font-weight: 400;
		src: url('/fonts/poppins-regular.ttf') format('truetype');
	}
	@font-face {
		font-family: Poppins;
		font-weight: 500;
		src: url('/fonts/poppins-bold.ttf') format('truetype');
	}
`;

export function GlobalStyle() {
	return <Global styles={globalStyle} />;
}
