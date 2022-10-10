import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
	display: flex;
	z-index: 1000;
	justify-content: center;
	border-radius: 10px;
	background-color: white;
`;

const Form = styled.form`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	&:focus-within {
		outline: 2px solid red;
	}
`;

const Input = styled.input`
	height: 50px;
	border: none;
	background-color: transparent;
	font-size: 14px;
`;

const SquareIcon = styled.div`
	display: grid;
	align-content: center;
	justify-content: center;
	width: 50px;
`;

export default function SearchInput({searchTerm, onSearchTermChange}) {
	return (
		<SearchBarWrapper>
			<Form onSubmit={event => event.preventDefault()}>
				<SquareIcon>
					<SearchRoundedIcon color="action" />
				</SquareIcon>
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
