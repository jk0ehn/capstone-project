import Image from 'next/image';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import {data} from '../../components/Cards/data/data';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Section = styled.section`
	display: flex;
	justify-content: center;
`;

const DetailCard = styled.div`
	display: grid;
	justify-content: center;
	gap: 50px;
	width: 275px;
	min-height: 500px;
	margin: 200px 50px 150px 50px;
	padding: 50px;
	border-radius: 30px;
	background-color: white;
	box-shadow: 0 0 18px -2px rgba(0, 0, 0, 0.07);
`;

const Img = styled.div`
	display: grid;
	width: 150px;
	height: 150px;
	overflow: hidden;
	border-radius: 50%;
`;

const TextArea = styled.p`
	text-align: center;
`;

const ContactArea = styled.div`
	display: flex;
	justify-content: space-between;
	height: 32px;
`;

export default function Detail() {
	const router = useRouter();
	const ident = router.query.ident;
	const expert = data.experts.find(event => event.ident === ident);

	if (!ident) {
		return <p>no number found</p>;
	}

	return (
		<>
			<Header first_name={expert.first_name} last_name={expert.last_name} />
			<Section>
				<DetailCard>
					<Img>
						<Image
							src={'/img/avatar-female.jpg'}
							width={100}
							height={100}
							objectFit="cover"
							alt="ProfilePic"
						/>
					</Img>

					<TextArea>
						<div>ID: {expert.ident}</div>

						<div>{expert.state}</div>
						<div>{expert.city}</div>
					</TextArea>

					<ContactArea>
						<button onClick={() => router.back()}>back</button>

						<a href="mailto:{expert.email}">
							<button>mail</button>
						</a>
						<a href="https://calendly.com/" target="_blank" rel="noreferrer">
							<button>calender</button>
						</a>
					</ContactArea>
				</DetailCard>
			</Section>

			<Footer />
		</>
	);
}
