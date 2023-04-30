import { Group, Indicator, Space, Text } from "@mantine/core";
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

			<Indicator
				inline
				color="red.8"
				size={"1rem"}
				label={cart.length}
				style={{ position: "relative", right: "4rem" }}
			>
				<Storefront fontSize="large" style={{ color: "white" }} />
			</Indicator>
		</div>
	);
};

export default HeaderContent;
