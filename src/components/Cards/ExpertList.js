import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '../Footer';

import {data} from './data/data';

const Ul = styled.ul`
	padding: 0;
	font-size: 14px;
	font-weight: 200;
	list-style: none;
`;

const Anchor = styled.a`
	color: #767676;
	text-decoration: none;
`;

const Card = styled.div`
	display: flex;
	align-items: center;
	margin: 0 30px 30px 30px;
	padding: 15px;
	border-radius: 20px;
	background-color: white;
	box-shadow: 0 0 18px -2px rgba(0, 0, 0, 0.07);
`;

const ImageWrapper = styled.div`
	display: grid;
	width: 80px;
	height: 80px;
	overflow: hidden;
	border-radius: 50%;
`;

const DetailPreview = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 0 0 30px;
`;

const City = styled.div`
	margin-top: 3px;
	color: lightgrey;
	font-size: 14px;
`;

const HeadName = styled.span`
	color: #61adad;
`;

export default function ExpertList({searchTerm}) {
	return (
		<>
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
											<HeadName>
												{item.first_name} {item.last_name}
											</HeadName>
											<span>{item.ident}</span>
											<City>{item.city}</City>
										</DetailPreview>
									</Card>
								</Anchor>
							</Link>
						</li>
					))}
			</Ul>
			<Footer />
		</>
	);
}
