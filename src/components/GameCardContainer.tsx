import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			borderRadius={10}
			overflow="hidden"
			transition={"transform .3s ease"}
			_hover={{
				transform: "scale(1.03)",
			}}
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;

