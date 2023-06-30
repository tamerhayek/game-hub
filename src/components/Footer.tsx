import { Flex, Heading, Link, Text } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Flex
			justifyContent={"center"}
			alignItems={"center"}
			flexDirection={"column"}
			gap={3}
			padding={5}
			position={"fixed"}
		>
			<Heading as={"h3"} size={"xl"}>
				Made by Tamer Hayek
			</Heading>
			<Flex gap={2}>
				<Link href="https://tamerhayek.com" color={"blue.400"}>
					My Portfolio
				</Link>{" "}
				-
				<Link
					href="https://github.com/tamerhayek/game-hub"
					color={"blue.400"}
				>
					Github Repository
				</Link>
			</Flex>
			<Text>
				Personal project for hobby purpose powered by{" "}
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
			</Text>
		</Flex>
	);
};

export default Footer;

