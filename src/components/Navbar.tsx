import { Box, HStack, Image, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
	return (
		<Box padding={5}>
			<HStack
				justifyContent="space-between"
				alignItems={"center"}
				spacing={10}
			>
				<Link to="/">
					<Image
						src={logo}
						alt="Logo"
						cursor={"pointer"}
						boxSize={"60px"}
						objectFit={"cover"}
					/>
				</Link>
				<Show above="lg">
					<SearchInput />
				</Show>
				<ColorModeSwitch />
			</HStack>
			<Show below="lg">
				<SearchInput />
			</Show>
		</Box>
	);
};

export default Navbar;

