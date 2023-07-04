"use client";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BiX } from "react-icons/bi";

const Banner = () => {
	const [isBannerOpen, setIsBannerOpen] = useState(true);

	if (!isBannerOpen) return null;

	return (
		<Flex
			tabIndex={-1}
			position={"fixed"}
			bottom={0}
			left={0}
			zIndex={50}
			justifyContent={"center"}
			alignItems={"center"}
			bgColor={"gray.700"}
			padding={5}
			w="full"
		>
			<Flex
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
				marginX={"auto"}
				gap={3}
				textAlign={"center"}
			>
				<Text>
					Personal project made by Tamer Hayek for hobby purpose
					powered by{" "}
					<Link href="https://reactjs.org/" color={"blue.300"}>
						React
					</Link>
					,{" "}
					<Link href="https://chakra-ui.com/" color={"blue.300"}>
						Chakra UI
					</Link>{" "}
					and{" "}
					<Link href="https://rawg.io/" color={"blue.300"}>
						RAWG API
					</Link>
				</Text>
				<Text>
					<Link href="https://tamerhayek.com">My Portfolio</Link> -{" "}
					<Link href="https://github.com/tamerhayek/game-hub">
						Github Repository
					</Link>
				</Text>
			</Flex>
			<Button
				rounded={"full"}
				padding={3}
				bgColor={"gray.700"}
				onClick={() => setIsBannerOpen(false)}
			>
				<BiX size={"30px"} />
			</Button>
		</Flex>
	);
};

export default Banner;

