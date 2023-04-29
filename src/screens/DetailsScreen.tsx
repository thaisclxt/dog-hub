import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ScreenTitle from "../components/ScreenTitle";

import axios from "axios";

interface Breed {
	id: string;
	name: string;
	life_span: string;
	bred_for: string;
	breed_group: string;
	temperament: string;
	weight: {
		imperial: string;
		metric: string;
	};
	height: {
		imperial: string;
		metric: string;
	};
}

const DetailsScreen = () => {
	const { id } = useParams();
	const [breed, setBreed] = useState<Breed>();

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get<Breed>(`../breed/${id}.json`);
			setBreed(response.data);
		};

		fetchData();
	}, []);

	return (
		<>
			<ScreenTitle title="Detalhes" />
			{id}
			{breed?.bred_for}
		</>
	);
};

export default DetailsScreen;
