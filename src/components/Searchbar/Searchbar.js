import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const MySearchbar = styled.div`
	display: flex;
	flex-direction: row;
	width: 500px;
	max-width: 600px;
	margin: 20px;
	padding: 15px;
	gap: 15px;
	border-radius: 9999px;
	box-shadow: 0 0 6px 1px rgba(204, 204, 204, 0.48);
`;

const MyInput = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	font-size: 1.1em;
`;

export default function Searchbar() {
	return (
		<Wrapper>
			<MySearchbar>
				<SearchRoundedIcon color="action" />
				<MyInput placeholder="Enter your location here" />
			</MySearchbar>
		</Wrapper>
	);
}
