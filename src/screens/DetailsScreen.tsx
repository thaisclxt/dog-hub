import ScreenTitle from "../components/ScreenTitle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Breed } from "../interfaces";

import axios from "axios";

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
			{breed?.name}
		</>
	);
};

export default DetailsScreen;
