import styles from "./quickPlay.module.css";
import { SLIDES_IMG_PATH } from "@/utils/Constants";
import Icon from "@/components/ui/images/Icon";

const QuickPlay = ({
  game,
  onGamePlay,
  playIcon = "/img/play-icon-blue.svg"
}) => {
  return (
    <div className={styles.quickPlay} onClick={(e) => onGamePlay(e)}>
      <div className={styles.left}>
        {game?.image && (
          <Icon
            src={`${SLIDES_IMG_PATH}mobile/${game.image}_slide.jpg`}
            width="50"
            height="40"
            alt={game.name}
            title={game.title}
            priority={true}
            className=""
          />
        )}
        <div>
          <h3>{game.name}</h3>
          <div className={styles.continueGame}>Continue game &gt;</div>
        </div>
      </div>

      <div className={styles.right}>
        <span>
          <Icon
            width={24}
            height={24}
            src={playIcon}
            alt="Play Game"
            priority
          />
        </span>
        {/* <span className={styles.close}></span> */}
      </div>
    </div>
  );
};

export default QuickPlay;
