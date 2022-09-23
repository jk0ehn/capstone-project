import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const logo = '/logo.png';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">My Cannabis Guide</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<div>
				<h1>Find your local expert for medical cannabis</h1>
				<Image src={logo} alt={logo} width="100px" height="100px" />
				<h2>Where do you want to find a cannabis expert?</h2>
				<Link href="/search">
					<button>enter your search here</button>
				</Link>
			</div>
		</>
	);
}
