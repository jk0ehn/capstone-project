import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
	display: flex;
	position: sticky;
	z-index: 10;
	top: 0;
	align-items: center;
	justify-content: center;
	height: 90px;
	background-color: #61adad;
`;

const Form = styled.form`
	display: flex;
	flex-direction: row;
	height: 40px;
	border-radius: 999px;
	background-color: white;
`;

const Input = styled.input`
	padding-right: 20px;
	border: none;
	border-radius: 999px;
	color: #8c8c8c;
	font-weight: 300;

	&:focus {
		outline: 0;
	}
`;

const IconWrap = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
`;

export default function Searchbar({searchTerm, onSearchTermChange}) {
	return (
		<SearchBarWrapper>
			<Form onSubmit={event => event.preventDefault()}>
				<IconWrap>
					<SearchRoundedIcon color="action" />
				</IconWrap>
				<Input
					value={searchTerm}
					onChange={event => onSearchTermChange(event.target.value)}
					placeholder="Enter your location here"
					aria-label="searchexpertbylocation"
				/>
			</Form>
		</SearchBarWrapper>
	);
}
