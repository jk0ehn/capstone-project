import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import {data} from './data/data';

const Ul = styled.ul`
	padding: 0;
	list-style: none;
`;

const Anchor = styled.a`
	color: black;
	text-decoration: none;
`;

const Card = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 50px 30px 50px;
	padding: 15px;
	border-radius: 20px;
	background-color: white;
`;

const ImageWrapper = styled.div`
	width: 80px;
	height: 80px;
	overflow: hidden;
	border-radius: 50%;
`;

const DetailPreview = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px 0 0 30px;
`;

const City = styled.div`
	margin-top: 3px;
	color: lightgrey;
`;

export default function ExpertList({searchTerm}) {
	return (
		<Ul>
			{data.experts
				.filter(item => {
					return searchTerm.toLowerCase() === ''
						? item
						: item.city.toLowerCase().includes(searchTerm);
				})
				.map(item => (
					<li key={item.id}>
						<Link href={`/experts/${item.ident}`} passHref>
							<Anchor>
								<Card>
									<ImageWrapper>
										<Image
											src={
												item.gender === 'Female'
													? '/img/avatar-female.jpg'
													: '/img/avatar-male.jpg'
											}
											width={80}
											height={80}
											objectFit="cover"
											alt="portrait"
										/>
									</ImageWrapper>

									<DetailPreview>
										<span>
											{item.first_name} {item.last_name}
										</span>
										<span>{item.ident}</span>
										<City>{item.city}</City>
									</DetailPreview>
								</Card>
							</Anchor>
						</Link>
					</li>
				))}
		</Ul>
	);
}
