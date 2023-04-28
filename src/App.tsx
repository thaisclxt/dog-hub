import { AppShell, Header, Text } from "@mantine/core";
import Router from "./router";

const App = () => {
	return (
		<AppShell
			styles={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[2],
				},
			})}
			header={
				<Header height={80} style={{ backgroundColor: "#868e96" }}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
						}}
					>
						<Text color="white" size={25}>
							DOG
						</Text>
						<Text color="white" size={25} fw={700}>
							HUB
						</Text>
					</div>
				</Header>
			}
		>
			<Router />
		</AppShell>
	);
};

export default App;
