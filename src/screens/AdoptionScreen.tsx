import CompactCard from "../components/CompactCard";
import ScreenTitle from "../components/ScreenTitle";
import { Breed } from "../interfaces";

const AdoptionScreen = (props: {
	cart: Breed[];
	setCart: React.Dispatch<any | ((prevState: any) => any)>;
}) => {
	const { cart, setCart } = props;

	return (
		<>
			<ScreenTitle title="Sua lista de adoção" />

			{cart.map((dog, index) => (
				<CompactCard breed={dog} index={index} setCart={setCart} />
			))}
		</>
	);
};

export default AdoptionScreen;
