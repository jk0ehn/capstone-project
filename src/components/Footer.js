import styled from 'styled-components';

const GreenFooter = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 70px;
	background-color: #61adad;
	color: white;
	font-size: 22px;
	font-weight: 200;
`;

export default function Footer() {
	return (
		<GreenFooter>
			<p>Find your local expert!</p>
		</GreenFooter>
	);
}
