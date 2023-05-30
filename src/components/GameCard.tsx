import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card width={"400px"} borderRadius={10} overflow='hidden'>
			<Image
				src={getCroppedImageUrl(game.background_image)}
				alt={game.name}
			/>
			<CardBody marginY={3}>
				<Heading fontSize='2xl'>{game.name}</Heading>
				<HStack mt={2} justifyContent={"space-between"}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;

