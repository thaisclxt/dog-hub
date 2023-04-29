import { AppShell, Header } from "@mantine/core";

import Router from "./router";
import HeaderContent from "./components/HeaderContent";

const App = () => {
	return (
		<AppShell
			pt={"lg"}
			styles={(theme) => ({
				main: { backgroundColor: theme.colors.gray[2], margin: "-1rem" },
			})}
			header={
				<Header height={80} style={{ backgroundColor: "#868e96" }}>
					<HeaderContent />
				</Header>
			}
		>
			<Router />
		</AppShell>
	);
};

export default App;
