import styled from 'styled-components';

const GreenHeader = styled.span`
	display: flex;
	position: fixed;
	z-index: 10;
	top: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 90px;
	background-color: #61adad;
	color: white;
	font-size: 32px;
	font-weight: 300;
`;

export default function Header(props) {
	return (
		<GreenHeader>
			{props.first_name} {props.last_name}
		</GreenHeader>
	);
}
