import { Group, Space, Text } from "@mantine/core";
import { Storefront } from "@mui/icons-material";

const HeaderContent = () => {
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

			<Storefront
				fontSize="large"
				style={{ color: "white", position: "relative", right: "4rem" }}
			/>
		</div>
	);
};

export default HeaderContent;
