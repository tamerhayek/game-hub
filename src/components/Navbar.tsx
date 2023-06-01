import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
	return (
		<HStack justifyContent="space-between" padding="10px" spacing={10}>
			<Image src={logo} alt="Logo" boxSize="60px" />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default Navbar;

