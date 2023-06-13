import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
	rating: number;
}

const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: "Meh", boxSize: "25px" },
		4: { src: thumbsUp, alt: "Reccomended", boxSize: "25px" },
		5: { src: bullsEye, alt: "Exceptional", boxSize: "30px" },
	};

	return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;

