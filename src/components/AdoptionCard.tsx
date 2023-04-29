import { Breed, Breeds } from "../interfaces";
import { Badge, Card, Group, Image, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const AdoptionCard = (props: {
	breed: Breeds | Breed;
	requireDetails?: boolean;
}) => {
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
				<Image
					src={`assets/${props.breed.id}.jpg`}
					alt={`${props.breed.name} image`}
				/>
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
		</Card>
	);
};
export default AdoptionCard;
