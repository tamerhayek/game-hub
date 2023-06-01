import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	handleSelectSortOrder: (sortOrder: string) => void;
	selectedSortOrder: string | null;
}

const SortSelector = ({ selectedSortOrder, handleSelectSortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
	];

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by:{" "}
				{sortOrders.find((order) => order.value === selectedSortOrder)
					?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map(({ value, label }, index) => (
					<MenuItem
						key={index}
						value={value}
						onClick={() => handleSelectSortOrder(value)}
					>
						{label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;

