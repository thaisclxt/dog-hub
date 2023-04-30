import { Box, Center, Flex, Group, Image, Text } from "@mantine/core";
import { Close } from "@mui/icons-material";
import { Breed } from "../interfaces";

const removeAt = (index: number, array: any[]): any[] =>
	array.slice(0, index).concat(array.slice(index + 1));

const CompactCard = (props: {
	breed: Breed;
	index: number;
	setCart: React.Dispatch<any | ((prevState: any) => any)>;
}) => {
	const { breed, index, setCart } = props;

	return (
		<Center>
			<Box
				my={34}
				sx={(theme) => ({
					backgroundColor: theme.colors.gray[0],
					padding: theme.spacing.xs,
					borderRadius: theme.radius.md,
					width: "480px",
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
						<Text color="gray.7">{breed.name}</Text>
					</Group>

					<Close
						fontSize="medium"
						style={{ color: "gray", alignContent: "flex-end" }}
						onClick={() => setCart((prev: Breed[]) => removeAt(index, prev))}
					/>
				</Flex>
			</Box>
		</Center>
	);
};

export default CompactCard;
