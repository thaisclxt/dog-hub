import { useEffect, useState } from "react";
import { Badge, Card, Group, Image, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import ScreenTitle from "../components/ScreenTitle";

import axios from "axios";

interface Breed {
	id: number;
	name: string;
	temperament: string;
}

const ListingScreen = () => {
	const [breeds, setBreeds] = useState<Breed[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get<Breed[]>("breeds.json");
			setBreeds(response.data);
		};

		fetchData();
	}, []);

	return (
		<>
			<ScreenTitle title="Para Adoção" />

			<div style={{ width: 480, margin: "auto" }}>
				{breeds.map((breed) => (
					<Card
						shadow="md"
						padding="lg"
						radius="md"
						my={34}
						key={breed.id}
						component={Link}
						to={`details/${breed.id}`}
					>
						<Card.Section>
							<Image
								src={`assets/${breed.id}.jpg`}
								alt={`${breed.name} image`}
							/>
						</Card.Section>

						<Title order={2} align="left" color="gray.6" my="sm">
							{breed.name}
						</Title>

						<Group position="center" spacing="sm">
							{breed.temperament.split(", ").map((temperament: string) => (
								<Badge
									key={temperament}
									color="gray.6"
									size="lg"
									radius="sm"
									variant="outline"
								>
									{temperament}
								</Badge>
							))}
						</Group>
					</Card>
				))}
			</div>
		</>
	);
};

export default ListingScreen;
