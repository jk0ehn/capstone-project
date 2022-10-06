import Image from 'next/image';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import {data} from '../../components/Cards/data/data';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Section = styled.section`
	display: flex;
	justify-content: center;
	background-color: grey;
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
`;

const Img = styled.div`
	display: grid;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	overflow: hidden;
`;

const TextArea = styled.p`
	text-align: center;
`;

const Contact = styled.div`
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
			<Header />
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
						<div>
							{expert.first_name} {expert.last_name}
						</div>

						<div>{expert.ident}</div>

						<div>{expert.city}</div>
					</TextArea>

					<Contact>
						<button></button>
						<button></button>
						<button></button>
					</Contact>
				</DetailCard>
			</Section>

			<Footer />
		</>
	);
}
