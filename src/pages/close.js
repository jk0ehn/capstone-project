import styled from '@emotion/styled';
import ClearIcon from '@mui/icons-material/Clear';
import Lottie from 'lottie-react';
import Link from 'next/link';

import thx from '../lotties/thx.json';

const Main = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #61adad;
	color: white;
`;

const Position = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	right: 0;
	padding: 25px;
`;

const Frame = styled.div`
	width: 200px;
`;

export default function Close() {
	return (
		<Main>
			<Link href="/">
				<Position>
					<ClearIcon />
				</Position>
			</Link>
			<Frame>
				<Lottie animationData={thx} loop={stop} />
			</Frame>
		</Main>
	);
}
