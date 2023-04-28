import React from "react";
import ReactDOM from "react-dom/client";
import AdoptionScreen from "./screens/AdoptionScreen.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AdoptionScreen />
	</React.StrictMode>
);
