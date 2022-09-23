import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Main from '../components/Main';
import Searchbar from '../components/Searchbar/Searchbar';

const logo = '/logo.png';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">My Cannabis Guide</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<Main>
				<h1>Find your local expert for medical cannabis</h1>
				<Image src={logo} alt={'mycannabisguide'} width="100px" height="100px" />
				<h2>Where do you want to find your guide?</h2>
			</Main>
			<Link href="/search">
				<div>
					<Searchbar />
				</div>
			</Link>
		</>
	);
}
