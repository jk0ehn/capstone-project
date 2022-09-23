import Head from 'next/head';

export default function Search() {
	return (
		<>
			<Head>
				<title key="title">Search</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<h1>Search</h1>
			<input placeholder="Where do you want to search"></input>
		</>
	);
}
