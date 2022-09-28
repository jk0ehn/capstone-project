import Head from 'next/head';

import ExpertCards from '../components/Cards/ExpertCards';
import Listing from '../components/listing';
import Searchbar from '../components/Searchbar/Searchbar';

export default function Search() {
	return (
		<>
			<Head>
				<title key="title">Search</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<Searchbar />
			<ExpertCards />
			<Listing />
		</>
	);
}
