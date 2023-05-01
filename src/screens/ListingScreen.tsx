import { Breeds } from "../interfaces";
import { Stack } from "@mantine/core";
import { useEffect, useState } from "react";

import ScreenTitle from "../components/ScreenTitle";
import DogCard from "../components/DogCard";

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
				<div key={breed.id} style={{ width: 380 }}>
					<DogCard breed={breed} />
				</div>
			))}
		</Stack>
	);
};

export default ListingScreen;
