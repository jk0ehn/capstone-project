import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Form = styled.div`
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

const Input = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	font-size: 1.1em;
`;

export default function Searchbar({searchTerm, onSearchTermChange}) {
	return (
		<SearchBarWrapper>
			<Form>
				<SearchRoundedIcon color="action" />
				<Input
					value={searchTerm}
					onChange={event => onSearchTermChange(event.target.value)}
					placeholder="Enter your location here"
				/>
			</Form>
		</SearchBarWrapper>
	);
}
