import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
	children: string;
}

const ExpandableText = ({ children }: Props) => {
	const [expanded, setExpanded] = useState(false);
	const limit = 300;

	if (!children) return null;

	if (children.length <= limit) {
		return <Text>{children}</Text>;
	}

	const text = expanded ? children : children.substring(0, limit) + "...";

	return (
		<>
			<Text marginBottom={3}>{text}</Text>
			<Button
				fontWeight={"bold"}
				colorScheme="blue"
				onClick={() => setExpanded(!expanded)}
			>
				{expanded ? "Show less" : "Show more"}
			</Button>
		</>
	);
};

export default ExpandableText;

