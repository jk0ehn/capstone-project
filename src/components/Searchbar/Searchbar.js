import styled from '@emotion/styled';
import {IoIosSearch} from 'react-icons/io';

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

	&:focus-within {
		border: 2px solid blue;
	}
`;

const Input = styled.input`
	padding-right: 20px;
	border: none;
	border-radius: 999px;
	color: #8c8c8c;
	font-weight: 200;

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
					<IoIosSearch />
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
