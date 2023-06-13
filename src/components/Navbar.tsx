import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
	handleSearch: (searchText: string) => void;
}

const Navbar = ({ handleSearch }: Props) => {
	return (
		<HStack justifyContent="space-between" padding="10px" spacing={10}>
			<Image
				src={logo}
				alt="Logo"
				boxSize="60px"
				cursor={"pointer"}
				onClick={() => window.location.reload()}
			/>
			<SearchInput handleSearch={handleSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default Navbar;

