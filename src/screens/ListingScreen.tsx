import { Breeds } from "../interfaces";
import { useEffect, useState } from "react";

import ScreenTitle from "../components/ScreenTitle";
import AdoptionCard from "../components/AdoptionCard";

import axios from "axios";

const ListingScreen = () => {
	const [breeds, setBreeds] = useState<Breeds[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get<Breeds[]>("breeds.json");
			setBreeds(response.data);
		};

		fetchData();
	}, []);

	return (
		<>
			<ScreenTitle title="Para Adoção" />

			<div style={{ width: 480, margin: "auto" }}>
				{breeds.map((breed) => (
					<AdoptionCard breed={breed} key={breed.id} />
				))}
			</div>
		</>
	);
};

export default ListingScreen;
