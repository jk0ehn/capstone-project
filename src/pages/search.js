import Head from 'next/head';

import ExpertCard from '../components/Cards/ExpertCard';
import Searchbar from '../components/Searchbar/Searchbar';

export default function Search() {
	return (
		<>
			<Head>
				<title key="title">Search</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<Searchbar />
			<ExpertCard />
		</>
	);
}
