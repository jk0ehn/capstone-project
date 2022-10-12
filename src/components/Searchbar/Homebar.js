import Link from 'next/link';
import {IoIosSearch} from 'react-icons/io';
import styled from 'styled-components';

const Bar = styled.div`
	display: flex;
	align-items: center;
	width: 230px;
	margin-top: 90px;
	border-radius: 30px;
	background-color: white;
	box-shadow: 0 0 18px -2px rgba(0, 0, 0, 0.07);
`;

const StartButton = styled.button`
	width: 150px;
	border: none;
	border-radius: 0 0 0 0;
	background-color: transparent;
	color: grey;
	font-family: poppins, sans-serif;
	font-weight: 200;
	text-align: left;
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 60px;
`;

const BarWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Anchor = styled.a`
	text-decoration: none;
`;

const style = {color: 'grey', fontSize: '1.5em'};

export default function Homebar() {
	return (
		<Link href={'./search'} passHref>
			<Anchor>
				<BarWrapper>
					<Bar>
						<Icon>
							<IoIosSearch style={style} />
						</Icon>
						<StartButton>Start search here</StartButton>
					</Bar>
				</BarWrapper>
			</Anchor>
		</Link>
	);
}
