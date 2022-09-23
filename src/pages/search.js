import Head from 'next/head';

import Layout from '../components/Layout';

export default function Search() {
	return (
		<Layout>
			<Head>
				<title key="title">Search</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<h1>Search</h1>
		</Layout>
	);
}
