import Head from 'next/head';
import {useState} from 'react';

import ExpertList from '../components/Cards/ExpertList';
import Searchbar from '../components/Searchbar/Searchbar';

export default function Search() {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<>
			<Head>
				<title key="title">Search</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<Searchbar
				searchTerm={searchTerm}
				onSearchTermChange={value => {
					setSearchTerm(value);
				}}
			/>
			<ExpertList searchTerm={searchTerm} />
		</>
	);
}
