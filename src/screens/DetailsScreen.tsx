import { Breed } from "../interfaces";
import { Stack } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import ScreenTitle from "../components/ScreenTitle";
import AdoptionCard from "../components/AdoptionCard";

const DetailsScreen = (props: {
	setCart: React.Dispatch<any | ((prevState: any) => any)>;
}) => {
	const { id } = useParams();
	const { setCart } = props;
	const [breed, setBreed] = useState<Breed>();

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get<Breed>(`../breed/${id}.json`);
			setBreed(response.data);
		};

		fetchData();
	}, []);

	return (
		<Stack align="center" spacing={34}>
			<ScreenTitle title="Detalhes" />

			{breed && (
				<div style={{ width: 480, margin: "auto" }}>
					<AdoptionCard
						breed={breed}
						key={breed.id}
						onAdd={() => setCart((prev: Breed[]) => [...prev, breed])}
						requireDetails
					/>
				</div>
			)}
		</Stack>
	);
};

export default DetailsScreen;
