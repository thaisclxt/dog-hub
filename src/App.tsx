import { AppShell, Group, Header, Space, Text } from "@mantine/core";
import { Storefront } from "@mui/icons-material";

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
							alignItems: "center",
							justifyContent: "space-between",
							height: "100%",
						}}
					>
						<Space style={{ marginLeft: "2.5rem" }} />

						<Group spacing="-xs">
							<Text color="white" size={25}>
								DOG
							</Text>
							<Text color="white" size={25} fw={700}>
								HUB
							</Text>
						</Group>

						<Storefront
							fontSize="large"
							style={{ color: "white", position: "relative", right: "4rem" }}
						/>
					</div>
				</Header>
			}
		>
			<Router />
		</AppShell>
	);
};

export default App;
