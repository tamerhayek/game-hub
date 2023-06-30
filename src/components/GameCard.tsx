import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/imageUrl";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const navigate = useNavigate();
	return (
		<Card
			height={"100%"}
			onClick={() => navigate("/games/" + game.slug)}
			cursor={"pointer"}
		>
			<Image
				src={getCroppedImageUrl(game.background_image)}
				alt={game.name}
			/>
			<CardBody marginY={3}>
				<HStack marginBottom={3} justifyContent={"space-between"}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">
					<Link to={`/games/${game.slug}`}>{game.name}</Link>
				</Heading>
				<Emoji rating={game.rating_top} />
			</CardBody>
		</Card>
	);
};

export default GameCard;

