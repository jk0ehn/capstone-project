import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
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
	justify-items: center;
	gap: 60px;
	width: 300px;
	margin: 150px 50px 75px 50px;
	padding: 30px;
	border-radius: 30px;
	background-color: white;
	box-shadow: 0 0 18px -2px rgba(0, 0, 0, 0.07);
`;

const Img = styled.div`
	width: 125px;
	height: 125px;
	overflow: hidden;
	border-radius: 50%;
`;

const TextArea = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;

const ContactArea = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
`;

const ContactButton = styled.button`
	border: none;
	background-color: transparent;
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
							width={125}
							height={125}
							objectFit="cover"
							alt="ProfilePic"
						/>
					</Img>

					<TextArea>
						<span>ID: {expert.ident}</span>
						<span>{expert.city}</span>
						<span>{expert.state}</span>
					</TextArea>

					<ContactArea>
						<a>
							<ContactButton onClick={() => router.back()}>
								<ArrowBackIosRoundedIcon color="action" />
							</ContactButton>
						</a>

						<a href="mailto:{expert.email}">
							<ContactButton>
								<MailOutlineRoundedIcon color="action" />
							</ContactButton>
						</a>
						<a href="https://calendly.com/" target="_blank" rel="noreferrer">
							<ContactButton>
								<CalendarMonthRoundedIcon color="action" />
							</ContactButton>
						</a>
					</ContactArea>
				</DetailCard>
			</Section>

			<Footer />
		</>
	);
}
