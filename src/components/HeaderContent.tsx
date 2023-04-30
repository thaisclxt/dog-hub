import { Badge, Group, Space, Text } from "@mantine/core";
import { Storefront } from "@mui/icons-material";
import { Breed } from "../interfaces";

const HeaderContent = (props: { cart: Breed[] }) => {
	const { cart } = props;

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				height: "100%",
			}}
		>
			<Space style={{ marginLeft: "2.5rem" }} />

			<Group spacing="-xs">
				<Text color="white" size={25}>
					DOG
				</Text>
				<Text color="white" size={25} fw={700}>
					HUB
				</Text>
			</Group>

			<Group>
				<Storefront
					fontSize="large"
					style={{ color: "white", position: "relative", right: "2.3rem" }}
				/>
				<Badge
					color="red.8"
					size={"0.5rem"}
					variant="filled"
					style={{ position: "relative", right: "4rem", top: "-0.9rem"}}
				>
					{cart.length}
				</Badge>
			</Group>
		</div>
	);
};

export default HeaderContent;
