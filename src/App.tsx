import { AppShell, Header } from "@mantine/core";
import { useState } from "react";
import { Breed } from "./interfaces";

import HeaderContent from "./components/HeaderContent";
import Router from "./router";

const App = () => {
	const [cart, setCart] = useState<Breed[]>([]);

	return (
		<AppShell
			styles={{ main: { backgroundColor: "#ededed" } }}
			header={
				<Header height={80} style={{ backgroundColor: "#a5a5a5" }}>
					<HeaderContent cart={cart} />
				</Header>
			}
		>
			<Router cart={cart} setCart={setCart} />
		</AppShell>
	);
};

export default App;
