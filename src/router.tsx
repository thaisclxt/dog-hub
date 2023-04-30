import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Breed } from "./interfaces";

import ListingScreen from "./screens/ListingScreen";
import AdoptionScreen from "./screens/AdoptionScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Router = (props: {
	cart: Breed[];
	setCart: React.Dispatch<React.SetStateAction<Breed[]>>;
}) => {
	const { cart, setCart } = props;

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ListingScreen />} />
				<Route
					path="/details/:id"
					element={<DetailsScreen setCart={setCart} />}
				/>
				<Route
					path="/adoption"
					element={<AdoptionScreen cart={cart} setCart={setCart} />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
