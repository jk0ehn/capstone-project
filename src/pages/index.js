import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Main from '../components/Main';
import Searchbar from '../components/Searchbar/Searchbar';

const logo = '/logo.png';

const Anchor = styled.a`
	text-decoration: none;
`;

const H1 = styled.h1`
	margin: 0;
	padding: 0;
	color: #4b8f8f;
	font-size: 3.5em;
	font-weight: 300;
	text-align: center;
`;

const H2 = styled.h2`
	margin: 0;
	padding: 0;
	color: #839a9a;
	font-size: 1.3em;
	font-weight: 100;
	text-align: center;
`;

const ImageDefinition = styled.div`
	width: 170px;
	margin-top: 75px;
`;

const HeaderHome = styled.div`
	position: absolute;
	right: 0;
	width: 60px;
	height: 60px;
	border-radius: 0 0 0 30px;
	background-color: #61adad;
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
				<ImageDefinition>
					<Image src={logo} alt={'mycannabisguide'} width="592px" height="716px" />
				</ImageDefinition>
				<H1>ananda</H1>
				<H2>my cannabis guide</H2>
			</Main>
			<Link href="/search">
				<Anchor>
					<Searchbar />
				</Anchor>
			</Link>

			<Footer />
		</>
	);
}
