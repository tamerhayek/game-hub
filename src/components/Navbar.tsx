import { Box, HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Description from "./Description";
import SearchInput from "./SearchInput";

const Navbar = () => {
	return (
		<Box padding={"10px"}>
			<HStack justifyContent="space-between" spacing={10}>
				<Image
					src={logo}
					alt="Logo"
					boxSize="60px"
					cursor={"pointer"}
					onClick={() => window.location.reload()}
				/>
				<Show above="lg">
					<SearchInput />
				</Show>
				<ColorModeSwitch />
			</HStack>
			<Show below="lg">
				<SearchInput />
			</Show>
			<Description />
		</Box>
	);
};

export default Navbar;

