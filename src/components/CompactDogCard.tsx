import { Box, Flex, Group, Image, Title } from "@mantine/core";
import { Close } from "@mui/icons-material";
import { Breed } from "../interfaces";

const removeAt = <T,>(index: number, array: T[]): T[] =>
	array.slice(0, index).concat(array.slice(index + 1));

const CompactDogCard = (props: {
	breed: Breed;
	index: number;
	setCart: React.Dispatch<any | ((prevState: any) => any)>;
}) => {
	const { breed, index, setCart } = props;

	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colors.gray[0],
				padding: theme.spacing.xs,
				borderRadius: theme.radius.md,
				boxShadow: theme.shadows.md,
				width: "380px",
			})}
		>
			<Flex justify={"space-between"}>
				<Group>
					<Image
						radius="md"
						src={`../assets/${breed.id}.jpg`}
						alt={` image`}
						height={80}
						width={100}
					/>
					<Title order={4}>{breed.name}</Title>
				</Group>

				<Close
					fontSize="medium"
					style={{
						color: "gray",
						alignContent: "flex-end",
						cursor: "pointer",
					}}
					onClick={() => setCart((prev: Breed[]) => removeAt(index, prev))}
				/>
			</Flex>
		</Box>
	);
};

export default CompactDogCard;
