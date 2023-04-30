import { Breed, Breeds } from "../interfaces";
import { Badge, Button, Card, Group, Image, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const parseMeasurements = (
	value: string | number | { imperial: string; metric: string },
	isImperial = false
): string => {
	if (typeof value !== "object") return value.toString();
	return isImperial ? value.imperial : value.metric;
};

const AdoptionCard = (props: {
	breed: Breeds | Breed;
	requireDetails?: boolean;
}) => {
	const srcImage = () => {
		const path = props.requireDetails ? ".." : "";
		return path + `/assets/${props.breed.id}.jpg`;
	};

	return (
		<Card
			shadow="md"
			padding="lg"
			radius="md"
			my={34}
			component={Link}
			to={`details/${props.breed.id}`}
		>
			<Card.Section>
				<Image src={srcImage()} alt={`${props.breed.name} image`} />
			</Card.Section>

			<Title order={2} align="left" color="gray.6" my="sm">
				{props.breed.name}
			</Title>

			<Group position="center" spacing="sm">
				{props.breed.temperament.split(", ").map((temperament: string) => (
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

			{props.requireDetails && (
				<>
					<ul>
						{Object.entries(props.breed).map(([key, value]) => (
							<li key={key}>
								<span>{parseMeasurements(value)}</span>
							</li>
						))}
					</ul>

					<Button
						color="gray.6"
						uppercase
						fullWidth
						component={Link}
						to={"../../adoption"}
					>
						Adotar
					</Button>
				</>
			)}
		</Card>
	);
};
export default AdoptionCard;
