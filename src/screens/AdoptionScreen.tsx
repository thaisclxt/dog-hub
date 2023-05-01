import { Stack } from "@mantine/core";
import { Breed } from "../interfaces";

import CompactDogCard from "../components/CompactDogCard";
import ScreenTitle from "../components/ScreenTitle";

const AdoptionScreen = (props: {
	cart: Breed[];
	setCart: React.Dispatch<any | ((prevState: any) => any)>;
}) => {
	const { cart, setCart } = props;

	return (
		<Stack align="center" spacing={34}>
			<ScreenTitle title="Sua lista de adoção" />

			{cart.map((dog, index) => (
				<CompactDogCard
					breed={dog}
					key={index}
					index={index}
					setCart={setCart}
				/>
			))}
		</Stack>
	);
};

export default AdoptionScreen;
