import { Flex, Heading, Link, Text } from "@chakra-ui/react";

const Description = () => {
	return (
		<Text textAlign={"center"} padding={3}>
			Personal project made by Tamer Hayek for hobby purpose powered by{" "}
			<Link href="https://reactjs.org/" color={"blue.400"}>
				React
			</Link>
			,{" "}
			<Link href="https://chakra-ui.com/" color={"blue.400"}>
				Chakra UI
			</Link>
			, and{" "}
			<Link href="https://rawg.io/" color={"blue.400"}>
				RAWG API
			</Link>
			<br />
			<br />
			<Link href="https://tamerhayek.com" color={"blue.400"}>
				My Portfolio
			</Link>{" "}
			-{" "}
			<Link
				href="https://github.com/tamerhayek/game-hub"
				color={"blue.400"}
			>
				Github Repository
			</Link>
		</Text>
	);
};

export default Description;

