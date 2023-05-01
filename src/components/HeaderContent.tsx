import { Badge, Group, Space, Text } from "@mantine/core";
import { ArrowBack, Storefront } from "@mui/icons-material";
import { Breed } from "../interfaces";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderContent = (props: { cart: Breed[] }) => {
	const { cart } = props;

	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				height: "100%",
			}}
		>
			{location.pathname === "/" ? (
				<Space style={{ marginLeft: "2.5rem" }} />
			) : (
				<ArrowBack
					fontSize="large"
					style={{ color: "white", marginLeft: "3rem", cursor: "pointer" }}
					onClick={() => navigate(-1)}
				/>
			)}

			<Group
				spacing="-xs"
				onClick={() => navigate("/")}
				style={{ cursor: "pointer" }}
			>
				<Text color="white" size={25}>
					DOG
				</Text>
				<Text color="white" size={25} fw={700}>
					HUB
				</Text>
			</Group>

			<Group
				onClick={() => navigate("/adoption")}
				style={{ cursor: "pointer" }}
			>
				<Storefront
					fontSize="large"
					style={{ color: "white", position: "relative", right: "2.3rem" }}
				/>
				<Badge
					color="red.8"
					size={"0.5rem"}
					variant="filled"
					style={{ position: "relative", right: "4rem", top: "-0.9rem" }}
				>
					{cart.length}
				</Badge>
			</Group>
		</div>
	);
};

export default HeaderContent;
