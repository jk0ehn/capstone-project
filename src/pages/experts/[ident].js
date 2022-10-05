import Image from 'next/image';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import {data} from '../../components/Cards/data/data';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Section = styled.section`
	display: flex;
	justify-content: center;
	height: 100vh;
	padding: 200px 50px 150px 50px;
	background-color: grey;
`;

const DetailCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 350px;
	padding: 50px;
	border-radius: 30px;
	background-color: white;
`;

const Img = styled.div`
	width: 228px;
	height: 228px;
	overflow: hidden;
	border-radius: 50%;
`;

const TextArea = styled.text`
	margin-top: 25px;
	text-align: center;
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
							width="228px"
							height="228px"
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
				</DetailCard>
			</Section>

			<Footer />
		</>
	);
}
