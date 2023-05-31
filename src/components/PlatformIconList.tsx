import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons/lib";

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		mac: FaApple,
		linux: FaLinux,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		iphone: MdPhoneIphone,
		android: FaAndroid,
		globe: BsGlobe,
	};

	return (
		<HStack marginY={1}>
			{platforms.map((platform) => (
				<Icon
					as={iconMap[platform.slug]}
					key={platform.id}
					color={"gray.500"}
				/>
			))}
		</HStack>
	);
};

export default PlatformIconList;

