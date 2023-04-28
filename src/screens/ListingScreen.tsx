import { useEffect, useState } from "react";
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
			<h1>Para Adoção</h1>
			<div>
				{breeds.map((breed) => (
					<div key={breed.id}>
						<img src={`assets/${breed.id}.jpg`} alt="Fetched image" />

						<h2>{breed.name}</h2>

						{breed.temperament.split(", ").map((temperament: string) => (
							<p key={temperament}>{temperament}</p>
						))}
					</div>
				))}
			</div>
		</>
	);
};

export default ListingScreen;
