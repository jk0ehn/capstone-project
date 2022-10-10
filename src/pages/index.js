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
	font-weight: 400;
	text-align: center;
`;

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">My Cannabis Guide</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<Main>
				<H1>Find your local expert for medical cannabis</H1>

				<Image src={logo} alt={'mycannabisguide'} width="100px" height="100px" />
				<p>ananda</p>
				<p>my cannabis guide</p>
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
