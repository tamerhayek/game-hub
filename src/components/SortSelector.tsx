import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
	];

	const sortOrder = useGameQueryStore((store) => store.gameQuery.sortOrder);
	const setSortOrder = useGameQueryStore((store) => store.setSortOrder);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by:{" "}
				{sortOrders.find((order) => order.value === sortOrder)?.label ||
					"Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map(({ value, label }, index) => (
					<MenuItem
						key={index}
						value={value}
						onClick={() => setSortOrder(value)}
					>
						{label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;

