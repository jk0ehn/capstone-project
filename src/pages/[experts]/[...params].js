import {useRouter} from 'next/router';

export default function ID() {
	const router = useRouter();
	const {params = []} = router.query;

	if (params.length === 2) {
		return (
			<div>
				<h1>
					Alle {params[0]} für unter {params[1]} Euro
				</h1>
			</div>
		);
	} else if (params.length === 1) {
		return <h1>Alle {params[0]}</h1>;
	}
	return <h1>Autos</h1>;
}
