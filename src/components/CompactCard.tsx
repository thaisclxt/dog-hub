import { Box, Center, Flex, Group, Image, Text } from "@mantine/core";
import { Close } from "@mui/icons-material";

const CompactCard = () => (
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
						src={"../assets/6.jpg"}
						alt={` image`}
						height={80}
						width={100}
					/>
					<Text color="gray.7">aaaa</Text>
				</Group>

				<Close
					fontSize="medium"
					style={{ color: "gray", alignContent: "flex-end" }}
				/>
			</Flex>
		</Box>
	</Center>
);

export default CompactCard;
