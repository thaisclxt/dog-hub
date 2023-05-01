import { Stack } from "@mantine/core";
import { Breed } from "../interfaces";

import CompactCard from "../components/CompactCard";
import ScreenTitle from "../components/ScreenTitle";

const AdoptionScreen = (props: {
	cart: Breed[];
	setCart: React.Dispatch<any | ((prevState: any) => any)>;
}) => {
	const { cart, setCart } = props;

	return (
		<Stack align="center" spacing={34} h={300}>
			<ScreenTitle title="Sua lista de adoção" />

			{cart.map((dog, index) => (
				<CompactCard breed={dog} key={index} index={index} setCart={setCart} />
			))}
		</Stack>
	);
};

export default AdoptionScreen;
