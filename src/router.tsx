import { BrowserRouter, Route, Routes } from "react-router-dom";

import ListingScreen from "./screens/ListingScreen";
import AdoptionScreen from "./screens/AdoptionScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<ListingScreen />} />
			<Route path="/details/:id" element={<DetailsScreen />} />
			<Route path="/adoption" element={<AdoptionScreen />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
