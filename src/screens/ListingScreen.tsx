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
			Tela de Listagem
			<div>
				{breeds.map((breed) => (
					<p key={breed.id}>{breed.name}</p>
				))}
			</div>
		</>
	);
};

export default ListingScreen;
