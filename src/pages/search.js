import Head from 'next/head';

import Searchbar from '../components/Searchbar/Searchbar';

export default function Search() {
	return (
		<>
			<Head>
				<title key="title">Search</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<Searchbar />
		</>
	);
}
