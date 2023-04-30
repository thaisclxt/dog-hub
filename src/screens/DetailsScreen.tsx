import ScreenTitle from "../components/ScreenTitle";

import { Breed } from "../interfaces";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import AdoptionCard from "../components/AdoptionCard";

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

			{breed && (
				<div style={{ width: 480, margin: "auto" }}>
					<AdoptionCard breed={breed} key={breed.id} requireDetails />
				</div>
			)}
		</>
	);
};

export default DetailsScreen;
