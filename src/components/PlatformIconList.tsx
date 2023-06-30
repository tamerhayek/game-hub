import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../models/Platform";

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
		ios: MdPhoneIphone,
		android: FaAndroid,
		web: BsGlobe,
	};

	return (
		<HStack>
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

