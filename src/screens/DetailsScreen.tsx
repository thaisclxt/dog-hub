import { useParams } from "react-router-dom";
import ScreenTitle from "../components/ScreenTitle";

const DetailsScreen = () => {
	const { id } = useParams();

	return (
		<>
			<ScreenTitle title="Detalhes" />;
		</>
	);
};

export default DetailsScreen;
