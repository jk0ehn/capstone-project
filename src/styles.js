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
`;

export function GlobalStyle() {
	return <Global styles={globalStyle} />;
}
