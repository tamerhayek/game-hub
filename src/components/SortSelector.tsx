import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	handleSelectSort: (sort: string) => void;
	selectedSort: string | null;
}

const SortSelector = ({ selectedSort, handleSelectSort }: Props) => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {selectedSort}
			</MenuButton>
			<MenuList>
				<MenuItem onClick={() => {}}>Relevance</MenuItem>
				<MenuItem onClick={() => {}}>Date added</MenuItem>
				<MenuItem onClick={() => {}}>Name</MenuItem>
				<MenuItem onClick={() => {}}>Release date</MenuItem>
				<MenuItem onClick={() => {}}>Popolarity</MenuItem>
				<MenuItem onClick={() => {}}>Average rating</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;

