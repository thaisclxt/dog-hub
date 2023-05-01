import { Badge, Flex, Group, Space, Text, Title } from "@mantine/core";
import { ArrowBack, Storefront } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { Breed } from "../interfaces";

const HeaderContent = (props: { cart: Breed[] }) => {
	const { cart } = props;

	const location = useLocation();
	const navigate = useNavigate();

	return (
		<Flex
			justify="space-between"
			align="center"
			mx="3rem"
			style={{ height: "100%" }}
		>
			<Group>
				<Space />
				{location.pathname === "/" ? (
					<Space style={{ marginLeft: "2.1rem" }} />
				) : (
					<ArrowBack
						fontSize="large"
						style={{ color: "white", cursor: "pointer" }}
						onClick={() => navigate(-1)}
					/>
				)}
			</Group>

			<Group
				spacing="-xs"
				onClick={() => navigate("/")}
				style={{ cursor: "pointer" }}
			>
				<Title order={1}>DOG</Title>
				<Title order={1} fw={900}>
					HUB
				</Title>
			</Group>

			<Group
				spacing="-xs"
				onClick={() => navigate("/adoption")}
				style={{ cursor: "pointer" }}
			>
				<Storefront fontSize="large" style={{ color: "white" }} />
				<Badge
					color="red.8"
					size="0.5rem"
					variant="filled"
					style={{ position: "relative", right: "0.8rem", top: "-0.9rem" }}
				>
					{cart.length}
				</Badge>
			</Group>
		</Flex>
	);
};

export default HeaderContent;
