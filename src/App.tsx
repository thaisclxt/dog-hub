import { AppShell, Header } from "@mantine/core";
import { useState } from "react";
import { Breed } from "./interfaces";

import HeaderContent from "./components/HeaderContent";
import Router from "./router";

const App = () => {
	const [cart, setCart] = useState<Breed[]>([]);

	return (
		<AppShell
			styles={{ root: { backgroundColor: "#ededed", margin: "0 -1rem" } }}
			header={
				<Header
					height={80}
					style={{
						backgroundColor: "#a5a5a5",
						borderRadius: "0 0 0.5rem 0.5rem",
						borderBottom: "0",
					}}
					sx={(theme) => ({ boxShadow: theme.shadows.lg })}
				>
					<HeaderContent cart={cart} />
				</Header>
			}
		>
			<Router cart={cart} setCart={setCart} />
		</AppShell>
	);
};

export default App;
