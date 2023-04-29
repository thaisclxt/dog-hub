import { Title } from "@mantine/core";

const ScreenTitle = (props: { title: string }) => (
	<Title order={1} color="gray.7" align="center">
		{props.title}
	</Title>
);

export default ScreenTitle;
