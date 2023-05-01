import { Breeds } from "../interfaces";
import { Stack } from "@mantine/core";
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
		<Stack align="center" spacing={34}>
			<ScreenTitle title="Para adoção" />
			{breeds.map((breed) => (
				<div style={{ width: 480 }}>
					<AdoptionCard breed={breed} key={breed.id} />
				</div>
			))}
		</Stack>
	);
};

export default ListingScreen;
