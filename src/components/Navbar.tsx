import { Box, HStack, Image, Link, Show } from "@chakra-ui/react";
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
				<Link href="/">
					<Image
						src={logo}
						alt="Logo"
						cursor={"pointer"}
						boxSize={"60px"}
						objectFit={"contain"}
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

