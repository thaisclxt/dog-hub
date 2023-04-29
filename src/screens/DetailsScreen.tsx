import ScreenTitle from "../components/ScreenTitle";

import { Breed } from "../interfaces";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

const parseMeasurements = (
	value: string | number | { imperial: string; metric: string },
	isImperial = false
): string => {
	if (typeof value !== "object") return value.toString();
	return isImperial ? value.imperial : value.metric;
};

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
				<ul>
					{Object.entries(breed).map(([key, value]) => (
						<li key={key}>
							<span>{parseMeasurements(value)}</span>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default DetailsScreen;
