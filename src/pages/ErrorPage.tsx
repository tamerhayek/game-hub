import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import {
	isRouteErrorResponse,
	useNavigate,
	useRouteError,
} from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	const navigate = useNavigate();

	return (
		<Flex
			height={"100vh"}
			flexDir={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={5}
		>
			<Heading>Oops</Heading>
			<Text>
				{isRouteErrorResponse(error)
					? "This page does not exist."
					: "Something went wrong"}
			</Text>
			<Button onClick={() => navigate("/")}>Back to Home</Button>
		</Flex>
	);
};

export default ErrorPage;

