import GamePlay from "./GamePlay";
import Review from "../Review";
import Card from "@/components/ui/card/Card";
import CardContainer from "@/components/ui/card/CardContainer";
import styles from "@/components/game/gameDetails.module.css";
import Ad from "@/components/ad";

export default function Game({ game, handle, coin }) {
  const largeGameJSX = () => {
    return (
      <Card cardColor="darkBlue">
        <div className={styles.gameDetails}>
          <div className={styles.gameDetailsBody}>
            <GamePlay game={game} handle={handle} />
          </div>
          <Review styles={styles} game={game} handle={handle} />
        </div>
      </Card>
    );
  };

  const ad = () => {
    return <Ad cardColor="noBorder" />;
  };

  if (!game) {
    return <CardContainer></CardContainer>;
  }

  return (
    <>
      <CardContainer>{largeGameJSX()}</CardContainer>
      <CardContainer>{ad()}</CardContainer>
    </>
  );
}
