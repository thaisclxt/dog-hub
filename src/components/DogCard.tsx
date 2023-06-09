import { Badge, Button, Card, Group, Image, List, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { Breed, Breeds } from "../interfaces";

const parseMeasurements = (
	value: string | number | { imperial: string; metric: string },
	isImperial = false
): string => {
	if (typeof value !== "object") return value.toString();
	return isImperial ? value.imperial : value.metric;
};

const DogCard = (props: {
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
		<Card shadow="xl" padding="lg" radius="md" {...detailsProps}>
			<Card.Section>
				<Image src={srcImage()} alt={`${breed.name} image`} />
			</Card.Section>

			<Title order={3} align="left" my="sm">
				{breed.name}
			</Title>

			<Group position="center" spacing="sm">
				{breed.temperament.split(", ").map((temperament: string) => (
					<Badge
						key={temperament}
						fw={100}
						size="lg"
						radius="sm"
						variant="outline"
						style={{
							color: "#585858",
							border: "0.0625rem solid #585858",
							textTransform: "none",
						}}
					>
						{temperament}
					</Badge>
				))}
			</Group>

			{requireDetails && (
				<>
					<List my={34} icon="-">
						{Object.entries(breed).map(
							([key, value]) =>
								key !== "name" &&
								key !== "id" &&
								key !== "temperament" &&
								value !== "" && (
									<List.Item
										key={key}
										fw={700}
										sx={(theme) => ({
											color: theme.colors.gray[6],
											fontSize: theme.fontSizes.xs,
										})}
									>
										{parseMeasurements(value)}
									</List.Item>
								)
						)}
					</List>

					<Button
						uppercase
						fullWidth
						onClick={onAdd}
						style={{ background: "#6c6c6c" }}
						sx={(theme) => ({ boxShadow: theme.shadows.xl })}
					>
						Adotar
					</Button>
				</>
			)}
		</Card>
	);
};

export default DogCard;
