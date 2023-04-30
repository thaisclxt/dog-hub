import { AppShell, Header } from "@mantine/core";
import { useState } from "react";
import { Breed } from "./interfaces";

import Router from "./router";
import HeaderContent from "./components/HeaderContent";

const App = () => {
	const [cart, setCart] = useState<Breed[]>([]);

	return (
		<AppShell
			pt={"lg"}
			styles={(theme) => ({
				main: { backgroundColor: theme.colors.gray[2], margin: "-1rem" },
			})}
			header={
				<Header height={80} style={{ backgroundColor: "#868e96" }}>
					<HeaderContent cart={cart} />
				</Header>
			}
		>
			<Router cart={cart} setCart={setCart} />
		</AppShell>
	);
};

export default App;
