import CompactCard from "../components/CompactCard";
import ScreenTitle from "../components/ScreenTitle";
import { Breed } from "../interfaces";

const AdoptionScreen = (props: {
	cart: Breed[];
	setCart: React.Dispatch<React.SetStateAction<Breed[]>>;
}) => {
	const { cart } = props;

	return (
		<>
			<ScreenTitle title="Sua lista de adoção" />
			<CompactCard />
		</>
	);
};

export default AdoptionScreen;
