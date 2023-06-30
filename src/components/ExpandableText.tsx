import { Button, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

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

	const ref = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (ref && ref.current) ref.current.innerHTML = text;
	}, [expanded]);

	return (
		<>
			<Text ref={ref} marginBottom={3}></Text>
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

