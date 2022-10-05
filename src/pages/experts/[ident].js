import {useRouter} from 'next/router';

import {data} from '../../components/Cards/data/data';
import Footer from '../../components/Footer';

export default function Detail() {
	const router = useRouter();
	const ident = router.query.ident;
	const expert = data.experts.find(event => event.ident === ident);

	if (!ident) {
		return <p>no number found</p>;
	}

	return (
		<>
			<div>
				<h1>
					{expert.first_name} {expert.last_name}
				</h1>
				<div>{expert.city}</div>
			</div>

			<Footer />
		</>
	);
}
