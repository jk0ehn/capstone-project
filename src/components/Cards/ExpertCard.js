import Image from 'next/image';
import styled from 'styled-components';

import {data} from './data/data';

const Card = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 50px 20px 50px;
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

export default function ExpertCards({searchTerm}) {
	return (
		<>
			<div>
				{data
					.filter(item => {
						return searchTerm.toLowerCase() === ''
							? item
							: item.city.toLowerCase().includes(searchTerm);
					})
					.map(item => (
						<>
							<div>
								<Card key={item.id}>
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
											<text>
												{item.first_name} {item.last_name}
											</text>
											<br />
											<text>{item.ident}</text>
										</div>

										<div>
											<CityFont>{item.city}</CityFont>
										</div>
									</DetailPreview>
								</Card>
							</div>
						</>
					))}
			</div>
		</>
	);
}
