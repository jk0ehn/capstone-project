import styled from '@emotion/styled';
import Head from 'next/head';
import Image from 'next/image';

import Footer from '../components/Footer';
import Main from '../components/Main';
import Homebar from '../components/Searchbar/Homebar';

const logo = '/logo.png';

const Headline = styled.h1`
	margin: 0;
	padding: 0;
	color: #4b8f8f;
	font-size: 36px;
	font-weight: 400;
	text-align: center;
`;

const Title = styled.h2`
	margin: 0;
	padding: 0;
	color: #839a9a;
	font-size: 14px;
	font-weight: 200;
	text-align: center;
`;

const ImageWrapper = styled.div`
	width: 170px;
	margin-top: 75px;
`;

const HeaderHome = styled.div`
	position: absolute;
	right: 0;
	width: 60px;
	height: 60px;
	border-radius: 0 0 0 30px;
	background-color: transparent;
`;

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">My Cannabis Guide</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<HeaderHome></HeaderHome>
			<Main>
				<ImageWrapper>
					<Image src={logo} alt={'mycannabisguide'} width="592px" height="716px" />
				</ImageWrapper>
				<Headline>ananda</Headline>
				<Title>my cannabis guide</Title>
			</Main>

			<Homebar />

			<Footer />
		</>
	);
}
