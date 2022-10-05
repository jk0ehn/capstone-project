import styled from 'styled-components';

const GreenHeader = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	align-items: center;
	justify-content: center;
	height: 150px;
	width: 100%;
	background-color: #61adad;
	color: white;
	font-size: 24px;
`;

export default function Header() {
	return (
		<GreenHeader>
			<div>Header</div>
		</GreenHeader>
	);
}
