import { Breed, Breeds } from "../interfaces";
import { Badge, Button, Card, Group, Image, List, Title } from "@mantine/core";
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
	onAdd?: () => void;
	requireDetails?: boolean;
}) => {
	const { breed, onAdd, requireDetails } = props;

	const srcImage = () => {
		const path = requireDetails ? ".." : "";
		return path + `/assets/${breed.id}.jpg`;
	};

	const detailsProps = requireDetails
		? { to: "" }
		: { component: Link, to: `details/${breed.id}` };

	return (
		<Card shadow="md" padding="lg" radius="md" my={34} {...detailsProps}>
			<Card.Section>
				<Image src={srcImage()} alt={`${breed.name} image`} />
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

			{requireDetails && (
				<>
					<List my={34}>
						{Object.entries(breed).map(
							([key, value]) =>
								key !== "name" &&
								key !== "id" &&
								key !== "temperament" &&
								value !== "" && (
									<List.Item key={key}>{parseMeasurements(value)}</List.Item>
								)
						)}
					</List>

					<Button color="gray.6" uppercase fullWidth onClick={onAdd}>
						Adotar
					</Button>
				</>
			)}
		</Card>
	);
};

export default AdoptionCard;
