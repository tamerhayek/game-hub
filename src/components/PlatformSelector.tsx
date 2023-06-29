import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
	const { data, error } = usePlatforms();
	if (error) return null;

	const platformId = useGameQueryStore((store) => store.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((store) => store.setPlatformId);
	const selectedPlatform = usePlatform(platformId);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => setPlatformId(platform.id)}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;

