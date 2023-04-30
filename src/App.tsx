import { AppShell, Header } from "@mantine/core";

import { Breed } from "./interfaces";
import Router from "./router";
import HeaderContent from "./components/HeaderContent";

const App = () => {
	const cart: Breed[] = [];

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
			<Router cart={cart} />
		</AppShell>
	);
};

export default App;
