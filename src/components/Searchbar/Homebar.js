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

const Input = styled.input`
	width: 150px;
	border: none;
	border-radius: 0 0 0 0;
	&:focus {
		outline: none;
	}
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

const style = {color: 'grey', fontSize: '1.5em'};

export default function Homebar() {
	return (
		<Link href={'./search'}>
			<a>
				<BarWrapper>
					<Bar>
						<Icon>
							<IoIosSearch style={style} />
						</Icon>
						<Input />
					</Bar>
				</BarWrapper>
			</a>
		</Link>
	);
}
