import Image from 'next/image';
import styled from 'styled-components';

const Card = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 50px 0 50px;
	padding: 15px;
	border: 1px solid lightgrey;
	border-radius: 20px;
`;

const CardImage = styled.div`
	width: 80px;
	height: 80px;
	overflow: hidden;
	border-radius: 999px;
`;

const DetailPreview = styled.div`
	padding: 15px 0 0 30px;
`;

const CityFont = styled.div`
	margin-top: 3px;
	color: lightgrey;
`;

export default function ExpertCards() {
	return (
		<Card>
			<CardImage>
				<Image
					src="/img/avatar-female.jpg"
					width={80}
					height={80}
					objectFit="cover"
					alt="portrait"
				/>
			</CardImage>

			<DetailPreview>
				<div>
					<text>Name</text>
					<br />
					<text>Identcode</text>
				</div>

				<div>
					<CityFont>City</CityFont>
				</div>
			</DetailPreview>
		</Card>
	);
}
