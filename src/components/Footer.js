import styled from 'styled-components';

const GreenFooter = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100%;
	background-color: #61adad;
	color: white;
	font-size: 24px;
`;

export default function Footer() {
	return (
		<GreenFooter>
			<div>Find your local expert!</div>
		</GreenFooter>
	);
}
