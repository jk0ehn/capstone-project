import styled from '@emotion/styled';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import {grey} from '@mui/material/colors';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

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
	gap: 50px;
	width: 300px;
	margin: 135px 50px 75px 50px;
	padding: 50px;
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
	font-size: 0.9em;
	font-weight: 200;
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
						<span>ID : {expert.ident}</span>
						<span>{expert.city}</span>
						<span>{expert.state}</span>
					</TextArea>

					<ContactArea>
						<Link href="/">
							<a>
								<ContactButton>
									<CottageOutlinedIcon sx={{color: grey[600]}} />
								</ContactButton>
							</a>
						</Link>
						<a>
							<ContactButton onClick={() => router.back()}>
								<ListAltOutlinedIcon sx={{color: grey[600]}} />
							</ContactButton>
						</a>

						<Link href="/contact">
							<ContactButton>
								<MailOutlineRoundedIcon sx={{color: grey[600]}} />
							</ContactButton>
						</Link>

						<Link>
							<ContactButton>
								<FavoriteBorderIcon sx={{color: grey[600]}} />
							</ContactButton>
						</Link>
					</ContactArea>
				</DetailCard>
			</Section>

			<Footer />
		</>
	);
}
