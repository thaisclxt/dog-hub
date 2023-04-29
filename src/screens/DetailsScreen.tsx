import { useParams } from "react-router-dom";

const DetailsScreen = () => {
	const { id } = useParams();

	return <>Detalhes de {id}</>;
};

export default DetailsScreen;
