import { BrowserRouter } from "react-router-dom";
import { AppShell, Header } from "@mantine/core";
import { useState } from "react";
import { Breed } from "./interfaces";

import Router from "./router";
import HeaderContent from "./components/HeaderContent";

const App = () => {
	const [cart, setCart] = useState<Breed[]>([]);

	return (
		<BrowserRouter>
			<AppShell
				pt={"lg"}
				styles={(theme) => ({
					main: { backgroundColor: theme.colors.gray[2] },
				})}
				header={
					<Header height={80} style={{ backgroundColor: "#868e96" }}>
						<HeaderContent cart={cart} />
					</Header>
				}
			>
				<Router cart={cart} setCart={setCart} />
			</AppShell>
		</BrowserRouter>
	);
};

export default App;
