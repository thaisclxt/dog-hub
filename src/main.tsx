import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider
			theme={{
				fontFamily: "sans-serif",
				headings: {
					sizes: {
						h1: { fontSize: "1.7rem", fontWeight: "100" },
						h2: { fontSize: "1.6rem" },
						h3: { fontSize: "1.5rem" },
						h4: { fontSize: "1.2rem" },
					},
				},

				components: {
					Title: {
						styles: {
							root: {
								"&:is(h1)": { color: "white" },
								"&:is(h2)": { color: "#585858" },
								"&:is(h3)": { color: "#585858" },
								"&:is(h4)": { color: "#585858" },
							},
						},
					},
				},
			}}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MantineProvider>
	</React.StrictMode>
);
