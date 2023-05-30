import { Box, Card } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			width={"300px"}
			placeItems={"center"}
			borderRadius={10}
			overflow='hidden'
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;
